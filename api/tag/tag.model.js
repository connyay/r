'use strict';

module.exports = function (sequelize, DataTypes) {
    var Tag = sequelize.define('tags', {
        title: DataTypes.STRING
    });

    return Tag;
};
