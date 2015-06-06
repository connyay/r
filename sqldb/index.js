'use strict';

var Sequelize = require('sequelize'),
    path = require('path'),
    config = require('../config/environment'),
    models = ['recommendation', 'recommendation_tags', 'tag'];

var db = {
    Sequelize: Sequelize,
    sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};


models.forEach(function (model) {
    db[model] = db.sequelize.import(path.join(
        config.root,
        'api',
        model,
        model + '.model'
    ));
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;
