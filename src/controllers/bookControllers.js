const bookServices = require('../services/bookServices');
const { validationResult } = require('express-validator');

class BookControllers {
    async getBooks(req, res) {
        await bookServices.getAllBook()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(400).send(err.message));
    }

    async addBook(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            await bookServices.addBook(req.body)
            res.status(201).json({ message: 'Книга добавлена успешно' })
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getBook(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await bookServices.getOneBook(req.params.id)
            if (!result) {
                return res.status(404).json({ message: 'Книга не найдена' });
            }
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    async updateBook(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await bookServices.updateBook({ id: req.params.id, body: req.body });
            if (result === 0) {
                return res.status(404).json({ message: 'Книга не найдена' });
            }
            res.status(200).json({ message: 'Информация о книге обновлена' })
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteBook(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await bookServices.deleteBook(req.params.id)
            if (result === 0) {
                return res.status(404).json({ message: 'Книга не найдена' });
            }
            res.status(200).json({ message: 'Книга удалена успешно' })
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new BookControllers();