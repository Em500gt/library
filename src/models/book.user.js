const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model');
const Book = require('./book.model');

const BookUser = sequelize.define('BookUser', {
    BookId: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'id'
        }
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
},
    {
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['BookId', 'UserId']
            }
        ]
    });

module.exports = BookUser;