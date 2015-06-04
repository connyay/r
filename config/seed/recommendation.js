'use strict';

module.exports = function (models) {
    return models.recommendation.bulkCreate([{
        title: 'Cool foo here',
        description: 'Foo is really cool becuase bar',
        url: 'http://twitter.com/foobar',
        source: 'feed/twitter/fobar',
        category_id: 1,
        city: 'Raleigh',
        state: 'NC',
        score: 90,
        verified: false
    }]);
};
