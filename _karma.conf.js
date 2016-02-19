/* jshint node: true */
'use strict';

var prop = require('./tasks.const');
console.log(prop)
module.exports = function(config) {
    var options = {
        frameworks: ['qunit'],
        files: [prop.BUILD_PATH+'js/*.js', prop.BUILD_PATH+'test/test_test.test.js'],
        excludes: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        client: {
            captureConsole: false
        },
        autoWatch: true,
        browsers: ['PhantomJs'],
        singleRun: false,
        junitReporter: {
            outputFile: './',
            suite: ''
        },
        plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-ie-launcher',
            'karma-qunit'
        ],
    };

    config.set(options);
};