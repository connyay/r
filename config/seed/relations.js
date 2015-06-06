'use strict';
var Q = require('q');

module.exports = function (tag, recommendation) {
    var dfd = Q.defer();
    var dfdList = [];
    recommendation.forEach(function (r) {
        dfdList.push(r.addTag(tag[0], {
            score: 90
        }));
    });
    Q.all(dfdList).then(dfd.resolve);
    return dfd.promise;
};
