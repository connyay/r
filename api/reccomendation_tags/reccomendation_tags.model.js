'use strict';

module.exports = function (sequelize, DataTypes) {
    var ReccomendationTags = sequelize.define('reccomendation_tags', {
        reccomendation_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER
    });

    return ReccomendationTags;
};
