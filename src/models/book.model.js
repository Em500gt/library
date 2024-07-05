const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
    author: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    YearPublishing: {
        type: DataTypes.DATE,
        allowNull: false
    },

    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Book;