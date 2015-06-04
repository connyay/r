'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var sqldb = require('./sqldb');
var config = require('./config/environment');

// Setup server
var app = express();
app.disable('x-powered-by');

require('./config/express')(app);
require('./routes')(app);

function startServer() {
    // Populate databases with sample data
    if (config.seedDB) {
        require('./config/seed').then(function () {
            app.emit('seeded');
        }, function (err) {
            console.error('Seed errored?', err);
        });
    }

    function _startServer() {
        app.listen(config.port, config.ip, function () {
            var env = app.get('env');
            if (env !== 'test') {
                console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
            }
        });
    }
    setImmediate(_startServer);
}


sqldb.sequelize.sync()
    .then(startServer)
    .catch(function (err) {
        console.log('Server failed to start due to error: %s', err);
    });


// Expose app
exports = module.exports = app;
