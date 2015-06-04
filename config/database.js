'use strict';

var config = {
    development: {
        username: 'root',
        password: null,
        database: 'r-dev',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: null,
        database: 'r-test',
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};

module.exports = config;
