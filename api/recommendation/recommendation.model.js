'use strict';

module.exports = function (sequelize, DataTypes) {
    var Recommendation = sequelize.define('recommendations', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        url: DataTypes.STRING,
        source: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        score: DataTypes.INTEGER,
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        start: DataTypes.DATE,
        end: DataTypes.DATE
    });

    Recommendation.associate = function (models) {
        models.recommendation.belongsToMany(models.tag, {
            through: models.reccomendation_tags
        });
        models.recommendation.belongsTo(models.category);
    };

    return Recommendation;
};
