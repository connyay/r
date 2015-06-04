'use strict';

module.exports = function (models) {
    return models.category.bulkCreate([{
        id: 1,
        title: 'Beer'
    }]);
};
