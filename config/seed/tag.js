'use strict';

module.exports = function (models) {
    return models.tag.bulkCreate([{
        title: 'beer'
    }, {
        title: 'concert'
    }, {
        title: 'food'
    }]);
};
