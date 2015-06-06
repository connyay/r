'use strict';

module.exports = function (models) {
    return models.recommendation.bulkCreate([{
        id: 1,
        title: 'First Friday',
        description: 'First Friday is a free self-guided tour of downtown’s cutting edge cultural hot spots.',
        url: 'http://www.godowntownraleigh.com/first-friday-raleigh',
        source: 'feed/reddit/TheCrash84',
        city: 'Raleigh',
        state: 'NC',
        type_id: 3,
        verified: false
    }]);
};
