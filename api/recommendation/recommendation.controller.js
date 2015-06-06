'use strict';

var Models = require('../../sqldb'),
    Recommendation = Models.recommendation,
    common = require('../common/controller');

exports.index = function (req, res) {
    var q = {
        include: [Models.tag, Models.type]
    };
    Recommendation.findAll(q)
        .then(common.responseWithResult(res))
        .catch(common.handleError(req, res));
};
