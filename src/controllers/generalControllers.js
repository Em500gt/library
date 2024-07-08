const generalServices = require('../services/generalServices');
const { validationResult } = require('express-validator');

class GeneralController {

    async quantity(req, res) {
        await generalServices.quantityAll()
            .then((data) => res.status(200).send(`Количество пользователей: ${data.user}\nКоличество книг: ${data.book}`))
            .catch((err) => res.status(400).send(err.message));
    }

    async page(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await generalServices.pageData(req.query)
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createBookUserRelation(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { bookId, userId } = req.params
            const { message, error, status } = await generalServices.addBU(bookId, userId)
            if (error) {
                res.status(status).json({ error });
            }
            res.status(200).json({ message });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteBookUserRelation(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { bookId, userId } = req.params
            const { message, error, status } = await generalServices.deleteBU(bookId, userId)
            if (error) {
                res.status(status).json({ error });
            }
            res.status(200).json({ message });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new GeneralController();