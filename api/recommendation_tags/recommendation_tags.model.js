'use strict';

module.exports = function (sequelize, DataTypes) {
    var RecommendationTags = sequelize.define('recommendation_tags', {
        recommendation_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER
    });

    return RecommendationTags;
};
