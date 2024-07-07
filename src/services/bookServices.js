const { Book } = require('../models/models');

class BookServices {
  async getAllBook() {
    const res = await Book.findAll({
      attributes: ['id', 'name', 'author', 'year', 'numberOfPage']
    });

    return res
  }

  async addBook(body) {
    await Book.create(body)
  }

  async getOneBook(id) {
    return await Book.findOne({
      where: { id },
      attributes: ['id', 'name', 'author', 'year', 'numberOfPage']
    })
  }

  async updateBook(data) {
    const [rowsAffected] = await Book.update(data.body, { where: { id: data.id } });
    return rowsAffected;
  }

  async deleteBook(id) {
    return await Book.destroy({ where: { id } });
  }
}

module.exports = new BookServices();