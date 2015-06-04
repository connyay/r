'use strict';


// Labsdev specific configuration
// ==================================

module.exports = {
    port: process.env.PORT || 9002,
    sequelize: {
        uri: 'mysql://root:@localhost:3306/r-dev',
        options: {
            logging: console.log,
            force: true,
            define: {
                timestamps: false,
                underscored: true
            }
        }
    },
    seedDB: true
};

