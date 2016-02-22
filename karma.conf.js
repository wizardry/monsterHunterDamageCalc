// Karma configuration
// Generated on Fri Feb 19 2016 17:38:41 GMT+0900 (東京 (標準時))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './build',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    // files: [
    //   './src/js/**/*.js',
    //   './src/test/**/*.js'
    // ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './js/**/*.js': 'coverage',
        './test/**/*.js': 'coverage',
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage','junit'],

    // karma-junit-reporter
    // the default configuration 
    junitReporter: {
      outputDir: './junit', // results will be saved as $outputDir/$browserName.xml 
      outputFile: 'test-result.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile 
      suite: 'frontend test', // suite will become the package name attribute in xml testsuite element 
      useBrowserName: true // add browser name to report and classes names 
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS', 'Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    coverageReporter: {
      type : 'cobertura',
      dir : 'xml/'
    },
    plugins:[
        'karma-qunit', 
        'karma-chrome-launcher', 
        'karma-phantomjs-launcher', 
        'karma-coverage', 
        'karma-junit-reporter'
    ]
  })
}
