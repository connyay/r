'use strict';

var Q = require('q');
var sqldb = require('../../sqldb');
var dfd = Q.defer();

Q.all([
        require('./tag')(sqldb),
        require('./recommendation')(sqldb)

    ])
    .spread(require('./relations'))
    .then(dfd.resolve, dfd.reject);

module.exports = dfd.promise;
