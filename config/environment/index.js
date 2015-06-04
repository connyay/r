'use strict';

var path = require('path');
var _ = require('lodash');

// All configurations will extend these options
// ============================================
var env = process.env.NODE_ENV;

var all = {
    env: env,
    // Root path of server
    root: path.normalize(__dirname + '/../..'),
    // Server port
    port: process.env.PORT || 9000
};

// Export the config object based on the NODE_ENV
// ==============================================

var config = {};

var env = env;
var configFile = './' + env + '.js';
config = _.merge(all, require(configFile) || {});
console.log('Loaded config file: ' + configFile);

module.exports = config;
