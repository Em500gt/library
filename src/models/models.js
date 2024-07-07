const sequelize = require('../config/db');
const User = require('./user.model');
const Book = require('./book.model');

(async () => {
    try {
        await sequelize.sync() // Добавить миграции
        console.log('⚡️ Tables synced')
    } catch (error) {
        console.error('Error syncing tables:', error)
    }
})()

User.hasMany(Book, {
    foreignKey: 'user'
})

Book.belongsTo(User, {
    foreignKey: 'user'
})

module.exports = { User, Book };