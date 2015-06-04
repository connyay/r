'use strict';

var Q = require('q');
var dfd = Q.defer();

// Q.all()
//     .then(dfd.resolve, dfd.reject);
dfd.resolve();
module.exports = dfd.promise;
