'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/', function (req, res) {
        res.end('lub-dub');
    });
};
