'use strict';

var Q = require('q');
var sqldb = require('../../sqldb');
var dfd = Q.defer();

Q.all([
        require('./category')(sqldb),
        require('./recommendation')(sqldb)

    ])
    .then(dfd.resolve, dfd.reject);

module.exports = dfd.promise;
