'use strict';
var errorHandler = require('errorhandler');

module.exports = function (app) {
    var env = app.get('env');

    require('./api/recommendation')(app);

    app.route('/*').get(function (req, res) {
        res.status(404).end();
    });

    if ('development' === env || 'test' === env) {
        app.use(errorHandler());
    }
};
