'use strict';

module.exports = function (models) {
    return models.recommendation.bulkCreate([{
        id: 1,
        title: 'Cool foo here',
        description: 'Foo is really cool becuase bar',
        url: 'http://twitter.com/foobar',
        source: 'feed/twitter/fobar',
        city: 'Raleigh',
        state: 'NC',
        score: 90,
        verified: false
    }]);
};
