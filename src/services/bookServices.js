const { Book } = require('../models/models');
const { Op } = require('sequelize');

class BookServices {
  async getAllBook() {
    const res = await Book.findAll();
    return res
  }

  async addBook(body) {
    await Book.create(body)
  }

  async getOneBook(id) {
    return await Book.findOne({
      where: { id }
    })
  }

  async updateBook(data) {
    const [rowsAffected] = await Book.update(data.body, { where: { id: data.id } });
    return rowsAffected;
  }

  async deleteBook(id) {
    return await Book.destroy({ where: { id } });
  }

  async search({ author, name }) {
    let whereClause = {};

    if (name && author) {
      whereClause = {
        [Op.and]: [
          { name },
          { author }
        ]
      };
    } else if (name) {
      whereClause = {
        name: { [Op.like]: `%${name}%` }
      }
    } else if (author) {
      whereClause = {
        author: { [Op.like]: `%${author}%` }
      }
    }

    return await Book.findAll({
      where: whereClause
    })
  }
}

module.exports = new BookServices();