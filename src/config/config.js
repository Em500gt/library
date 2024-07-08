require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_DEV,
        host: process.env.HOST,
        port: process.env.DATABASE_PORT,
        dialect: process.env.DIALECT_NAME,
        migrationStorageTableName: "migrations",
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_PROD,
        host: process.env.HOST,
        port: process.env.DATABASE_PORT,
        dialect: process.env.DIALECT_NAME,
        migrationStorageTableName: "migrations",
    },
};