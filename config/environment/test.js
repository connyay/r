'use strict';

// Test specific configuration
// ==================================
module.exports = {
    sequelize: {
        uri: 'mysql://root:@localhost:3306/r-test',
        options: {
            force: true,
            logging: false,
            define: {
                underscored: true
            }
        }
    },
    seedDB: true
};
