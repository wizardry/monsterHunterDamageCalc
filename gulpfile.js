//本体系

/**
* 外部に記述している定数ファイル。
*/
var prop = require('./tasks.const');
console.log(prop)

/*
* @ g 		= gulp 本体
* @ gulpif 	= gulp内でif文を利用できるようにする
*/
var g = require('gulp');
var gulpif = require('gulp-if');

/**
* ディレクトリ作成権限周りをうまいことしてくれる
*/
var mkdirp = require('mkdirp');

/*
* 簡単なオプションをまとめる。
* Minfy/Mapなど
* 詳細度が高いオプションはタスク前にまとめる。
*/
var options = {
	jsMinfy:false,
	jsMap:false,
	htmlMinfy:false,
	cssMinfy:false,
	cssMap:false,
}

//開発パス、ビルドパス
var srcPath = prop.SRC_PATH;
var buildPath = prop.BUILD_PATH;

console.log(srcPath);
console.log(buildPath);
/**
* @ yargs = gulp タスクコマンドに引数を渡せる
* @ 
*/

var argv = require('yargs').argv;
// Define option flag(--production)
var isProduction = (argv.production);


// imagemin
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// HTML minification
var minifyHTML = require('gulp-minify-html');

g.task('minify-html', function() {
	return g.src(buildPath + '*.html')
	.pipe(minifyHTML({
		conditionals: true,
		spare:true
	}))
	.pipe(g.dest(buildPath + './'));
});

g.task('imagemin', function () {
	return g.src(srcPath + 'img/*.{png,jpg,gif,svg}')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(g.dest(buildPath + 'img/'))
});
//js
/**
* @ concat = 複数ファイルをまとめる
* @ uglify = minfy化
* @ jshint = JavaScriptのsyntax、構文チェックを行う。
*
* TEST
* @ qunit = テストプラグインQUnit
*
*/
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var qunit  = require('gulp-qunit');
var karma  = require('karma');
var jsdoc  = require('gulp-jsdoc');

g.task('qunit',function(){
	return g.src(src+'test/index.html')
	.pipe(qunit());
});

g.task('lint', function() {
	g.src(srcPath+'test/**/*.*')
	.pipe(g.dest(buildPath+'test/'));
	return g.src(prop.JSHINT_TARGET_FILES)
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('default'));

});
g.task("jsdoc", function() {
  g.src([prop.SRC_PATH+"**/*.js"])
    .pipe(jsdoc.parser({
    	name:'sitname',
    	version:'0.0.0'
    }))
    .pipe(jsdoc.generator(prop.JSDOC, {path:'ink-docstrap',systemName:'sitename',theme:'darkly',linenums:true}, {outputSourceFiles:true}))
});


function copyJS(){
	g.src(srcPath+'js/**/*.json')
	.pipe(g.dest(buildPath+'js/'));
	g.src(srcPath+'js/**/*.js')
	.pipe(g.dest(buildPath+'js/'));
};
function copyImg(){
	g.src(srcPath+'img/**/')
	.pipe(g.dest(buildPath+'img/'));
};
g.task('copy',function(){
	copyJS();
	copyImg();
});

// copy .js files
g.task('copy:js', function(){
	copyJS();
});
// copy image files
g.task('copy:img', function(){
	copyImg();
});


//SCSS系
/**
* @ scss 			= gulp用のruby版を似せたscss
* @ sourcemaps 		= mapファイルの作成
* @ autoprefixCore 	= プレフィクスをつける
* @ autoprefix 		= プレフィクスをつける
* @ plumber 		=　コンパイルエラーでタスクが止まらないようにする
* @ minCss 			= cssMinfy
*/
var scss = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixCore = require('autoprefixer-core');
var autoprefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var minCss = require('gulp-minify-css');

g.task('sass',function(){
	var minCssFlg = true;
	return scss(srcPath+'css/',
		{
			style:'expanded',
			sourcemap:true
		}
	)
	.on('error',function(txt) {
		console.error('ERRor',txt.message);
	})
	.pipe(plumber())
	.pipe(autoprefix({
		browers:['Android 2.1','ie 8','ie 7'],
		cascade: false
	}))
	.pipe(sourcemaps.write('/map',{
		includeContent:false,
		sourceRoot:buildPath+'css/'
	}))
	.pipe(gulpif( minCssFlg,minCss(),console.log('minfy:'+minCssFlg) ))
	.pipe(g.dest(buildPath+'css/'));
});


//Jade系
/**
* @ jade = HTMLテンプレート言語
* @ dirs = 作業ファイル一覧を配列として取得する
* @ data = JSONファイルをjadeで参照できるようにする
*/
var jade = require('gulp-jade');
var dirs = require('recursive-readdir');
// var data = require('gulp-data');

g.task("jade",function(){
	g.src(['./src/**/*.jade','!*/include/*.jade','!*/layouts/*.jade','!*/elements/*.jade'])
	.pipe(plumber())
	// .pipe(data(function(file){
	// 	return require(srcPath+'_data/data.json')
	// }))
	.pipe(jade({
		pretty:true
	}))
	.pipe(g.dest(buildPath+''));
});


/**
* @connect = 簡易webサーバー
*/
var connect = require('gulp-connect');
g.task('server',function(){
	connect.server({
		root:'./build'
	});

});

/**
* 以下はコマンド系
*/

g.task('watch',['sass','jade','copy'],function(){
	g.watch('src/**/*.jade',['jade']);
	g.watch('src/css/**/*.scss',['sass']);
	g.watch('src/js/**/*.js',['lint']);
	// g.watch('src/js/**/*.js',['jsdoc']);
	g.watch('src/js/**/*.js',['copy:js']);
	g.watch('src/img/**/*.{png,jpg,gif,svg}',['copy:img']);
	g.watch(['src/js/**','src/test/**'],['qunit']);
})

g.task('test',[])

g.task('default',['watch','server'])

// build task
/*
* @ runSequence = 直列処理にする
*/
var runSequence = require('run-sequence');
g.task('build', function(callback){
	return runSequence(['sass','jade','copy'], 'compress', 'imagemin', 'minify-html')
})