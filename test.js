'use strict';
process.env.NODE_ENV = 'test';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var app     = require('./app'),
    should  = require('should'),
    request = require('supertest');

require('should-http');

function failBoat(err) {
    console.trace();
    throw err;
}

module.exports = {
    app: app,
    config: require('./config/environment'),
    request: request,
    agent: request.agent(app),
    should: should,
    fail: failBoat
};

before(function (done) {
    this.timeout(0);
    app.on('seeded', done);
});
