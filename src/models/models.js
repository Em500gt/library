const sequelize = require('../config/db');
const User = require('./user.model');
const Book = require('./book.model');
const BookUser = require('./book.user');
const {user, book} = require('./testdata');

(async () => {
    try {
        await sequelize.sync()
        console.log('⚡️ Tables synced')
    } catch (error) {
        console.error('Error syncing tables:', error)
    }
})()

Book.belongsToMany(User, { through: BookUser });
User.belongsToMany(Book, { through: BookUser });

// User.bulkCreate(user)
// Book.bulkCreate(book)

module.exports = { User, Book, BookUser };