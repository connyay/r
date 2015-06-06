'use strict';

module.exports = function (models) {
    return models.type.bulkCreate([{
        id: 1,
        title: 'Restaurant'
    }, {
        id: 2,
        title: 'Landmark'
    }, {
        id: 3,
        title: 'Event'
    }]);
};
