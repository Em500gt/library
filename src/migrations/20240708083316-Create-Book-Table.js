'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {

      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },

      author: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },

      year: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },

      numberOfPage: {
        type: Sequelize.DataTypes.INTEGER,
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
