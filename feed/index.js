'use strict';

var twitter = require('./twitter');

twitter('_connyay').then(function (tweets) {
    console.log(tweets);
});
