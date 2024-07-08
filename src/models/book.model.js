const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    numberOfPage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['id']
        }
    ]
})

module.exports = Book;