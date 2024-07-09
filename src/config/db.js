const { Sequelize } = require('sequelize');

if (process.env.NODE_ENV === 'development') {
    module.exports = new Sequelize(
        process.env.DATABASE_DEV,
        process.env.DB_USER_DEV,
        process.env.PASSWORD_DEV,
        {
            host: process.env.HOST_DEV,
            dialect: process.env.DIALECT_NAME,
        }
    );
}

if (process.env.NODE_ENV === 'production') {
    module.exports = new Sequelize(
        process.env.DATABASE_PROD,
        process.env.DB_USER_PROD,
        process.env.PASSWORD_PROD,
        {
            host: process.env.HOST_PROD,
            dialect: process.env.DIALECT_NAME,
        }
    );
}