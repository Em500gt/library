'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookUser', {
      BookId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Books',
          key: 'id'
        }
      },
      UserId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
      {
        indexes: [
          {
            unique: true,
            fields: ['BookId', 'UserId']
          }
        ]
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookUser');
  }
};
