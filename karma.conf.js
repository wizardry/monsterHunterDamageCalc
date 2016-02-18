/* jshint node: true */
'use strict';

var prop = require('./tasks.const');

module.exports = function(config) {
    var options = {
        frameworks: ['qunit'],
        files: prop.KARMA_TARGET_FILES,
        excludes: [],
        preprocessors: {},
        reporters: ['dots', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        client: {
            captureConsole: false
        },
        autoWatch: true,
        browsers: ['Chrome', 'IE'],
        singleRun: false,
        junitReporter: {
            outputFile: prop.TEST_REPORT_PATH,
            suite: ''
        }
    };

    config.set(options);
};