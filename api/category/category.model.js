'use strict';

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define('categories', {
        title: DataTypes.STRING
    });

    return Category;
};
