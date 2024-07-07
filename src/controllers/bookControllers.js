const bookServices = require('../services/bookServices');

class BookControllers {
    async getBooks(req, res) {
        await bookServices.getAllBook()
            .then((data) => res.send(data))
            .catch((err) => res.send(err.message));
    }

    async addBook(req, res) {
        await bookServices.addBook(req.body)
            .then(() => res.send('Успешно'))
            .catch((err) => res.send(err.message));
    }

    async getBook(req, res) {
        await bookServices.getOneBook(req.params.id)
            .then((data) => res.send(data))
            .catch((err) => res.send(err.message));
    }

    async updateBook(req, res) {
        await bookServices.updateBook({ id: req.params.id, body: req.body })
            .then(() => res.send('Информация о книге обновлена'))
            .catch((err) => res.send(err.message));
    }

    async deleteBook(req, res) {
        await bookServices.deleteBook(req.params.id)
            .then(() => res.send('Книга удалена'))
            .catch((err) => res.send(err.message));
    }
}

module.exports = new BookControllers();