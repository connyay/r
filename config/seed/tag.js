'use strict';

module.exports = function (models) {
    return models.tag.bulkCreate([{
        id: 1,
        title: 'beer'
    }, {
        id: 2,
        title: 'concert'
    }, {
        id: 3,
        title: 'food'
    }]);
};
