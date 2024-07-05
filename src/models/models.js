const sequelize = require('../config/db');
const User = require('./user.model');
const Book = require('./book.model');

(async () => {
    try {
        await sequelize.sync({ alter: true })
        console.log('⚡️ Tables synced')
    } catch (error) {
        console.error('Error syncing tables:', error)
    }
})()

module.exports = { User, Book };