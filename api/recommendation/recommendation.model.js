'use strict';

module.exports = function (sequelize, DataTypes) {
    var Recommendation = sequelize.define('recommendations', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        url: DataTypes.STRING,
        source: DataTypes.STRING,
        category: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        score: DataTypes.INTEGER
    });

    return Recommendation;
};
