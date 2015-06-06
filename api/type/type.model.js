'use strict';

module.exports = function (sequelize, DataTypes) {
    var Type = sequelize.define('types', {
        title: DataTypes.STRING
    });

    return Type;
};
