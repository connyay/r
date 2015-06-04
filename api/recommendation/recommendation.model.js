'use strict';

module.exports = function (sequelize, DataTypes) {
    var Recommendation = sequelize.define('recommendations', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        url: DataTypes.STRING,
        source: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        score: DataTypes.INTEGER
    });

    Recommendation.associate = function (models) {
        models.recommendation.belongsToMany(models.tag, {
            through: models.reccomendation_tags
        });
        models.recommendation.hasOne(models.category);
    };

    return Recommendation;
};
