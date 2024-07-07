const { Book } = require('../models/models');
const { User } = require('../models/models')

class BookServices {
  async getAllBook() {
    const res = await Book.findAll({
      attributes: ['id', 'name', 'author', 'year', 'numberOfPage'],
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name', 'email', 'Registered']
      //   }
      // ],
    });

    return res
  }

  async addBook(body) {
    await Book.create(body)
  }

  async getOneBook(id) {
    return await Book.findOne({
      where: { id },
      attributes: ['id', 'name', 'author', 'year', 'numberOfPage'],
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name', 'email', 'Registered']
      //   }
      // ],
    })
  }

  async updateBook(data) {
    await Book.update(data.body, { where: { id: data.id } })
  }

  async deleteBook(id) {
    await Book.destroy({ where: { id } });
  }
}

module.exports = new BookServices();