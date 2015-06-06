'use strict';
var Q = require('q');

module.exports = function (tags, types, recommendations) {
    var dfd = Q.defer();
    var dfdList = [];
    recommendations.forEach(function (r) {
        dfdList.push(r.addTag(tags[0], {
            score: 90
        }));
    });
    Q.all(dfdList).then(dfd.resolve);
    return dfd.promise;
};
