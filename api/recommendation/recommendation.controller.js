'use strict';

var Models = require('../../sqldb'),
    Recommendation = Models.recommendation,
    common = require('../common/controller');

exports.index = function (req, res) {
    var q = {
        include: [Models.tag, Models.type]
    };
    Recommendation.findAll(q)
        .then(function (recommendations) {
            recommendations = recommendations.map(function (r) {
                r = r.get({
                    plain: true
                });
                r.tags.map(function (t) {
                    t.score = t.recommendation_tags.score;
                    delete t.recommendation_tags;
                    return t;
                });
                return r;
            });

            res.json(recommendations);
        })
        .catch(common.handleError(req, res));
};
