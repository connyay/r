'use strict';

var Twitter = require('twitter');
var Q = require('q');
var client = new Twitter({
    consumer_key: 'v05sH9gMeTT87uDYqvux0c4Zj',
    consumer_secret: 'RrlLFrdzh07szPPk4ehCFTOmqSC5EC11yKLmtrYfhUHSFH8oc3',
    access_token_key: '',
    access_token_secret: ''
});

module.exports = function (screen_name, hashtags) {
    var dfd = Q.defer();

    client.get('statuses/user_timeline', {
        screen_name: screen_name,
        count: 2
    }, function (error, tweets) {
        if (error) {
            throw error;
        }
        console.log('hashtags', hashtags);
        console.log(tweets);
        dfd.resolve(tweets);
    });

    return dfd.promise;
};
