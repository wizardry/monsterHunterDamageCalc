/**
* タスクランナー関係の定数ファイル
* @see : https://www.htmlhifive.com/conts/web/view/library/CI#H30D330EB30C97528306E5B9A657030925B9A7FA93057305F30D530A130A430EB30927528610F3059308B
**/


var CONST = {
    //ビルドディレクトリのパス
    BUILD_PATH          : './build/',
    //ソースファイルが置いてあるパス
    SRC_PATH            : './src/',

    //JSHint のターゲットとなるファイル
    JSHINT_TARGET_FILES : ['./src/' + 'js/**/*.js','!'+ './src/' + 'js/**/lib/*.js'],

    //JSHint のレポートを出力するパス
    JSHINT_REPORT_PATH  : '',

    //JSDoc のターゲットとなるファイルパターンのリスト
    JSDOC_TARGET_FILES  : ['./src/' + 'js/**/*.js','!'+ './src/' + 'js/**/lib/*.js'],

    //JSDoc のレポートを出力するパス???
    JSDOC_OUTPUT_PATH   : ['./jsdoc/report/'],

    //JSDoc を出力するディレクトリのパス
    JSDOC               : ['./jsdoc/'],

    //Karma が読み込むファイル
    /**
    * リストの順に読み込むので依存関係に従った順で記述する
    * CSS なども必要であれば追加しておくと読み込まれる
    * debug ボタン押下時に QUnit の UI を出すために以下の JavaScript ファイルを作成し、QUnit とテストコードの間に読み込ませる
    */
    KARMA_TARGET_FILES  : '',

    //テストの結果を出力するディレクトリのパス
    TEST_REPORT_PATH    : '',

    //カバレッジのレポートを出力するディレクトリのパス
    OVERAGE_REPORT_DIR  : '',
};
module.exports = CONST;