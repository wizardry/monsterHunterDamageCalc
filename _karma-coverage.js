/* jshint node: true */
'use strict';

var karmaConf = require('./karma.conf');
var prop = require('./tasks.const');


function get(obj, property, defaultValue) {
    if (obj[property] == null) {
        obj[property] = defaultValue;
    }
    return obj[property];
}

function makeSubdir(path) {
    return function(browser) {
        return browser + '/' + path;
    };
}

module.exports = function(config) {
    karmaConf(config);

    var preprocessors = get(config, 'preprocessors', {});
    var preprocessorTarget = get(preprocessors, prop.SRC_PATTERN, []);
    preprocessorTarget.push('coverage');

    var reporters = get(config, 'reporters', []);
    reporters.push('coverage');

    config.coverageReporter = {
        dir: prop.COVERAGE_REPORT_DIR,
        reporters: [
            { type: 'html', subdir: makeSubdir('report') },
            { type: 'cobertura', subdir: makeSubdir('xml') },
            { type: 'text-summary' }
        ]
    };

    config.singleRun = true;
};