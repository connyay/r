'use strict';

var express = require('express');
var controller = require('./recommendation.controller');

module.exports = function (app) {
    var router = express.Router();
    router.get('/', controller.index);
    app.use('/recommendations', router);
};
