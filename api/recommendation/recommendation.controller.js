'use strict';

var Models = require('../../sqldb'),
    Recommendation = Models.recommendation,
    common = require('../common/controller');

exports.index = function (req, res) {
    Recommendation.findAll()
        .then(common.responseWithResult(res))
        .catch(common.handleError(req, res));
};
