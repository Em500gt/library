const generalServices = require('../services/generalServices');
const { validationResult } = require('express-validator');

class GeneralController {

    async quantity(req, res) {
        await generalServices.quantityAll()
            .then((data) => res.status(302).send(`Количество пользователей: ${data.user}\nКоличество книг: ${data.book}`))
            .catch((err) => res.status(400).send(err.message));
    }

    async search(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await generalServices.search(req.query);
            res.status(302).send(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async page(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const result = await generalServices.pageData(req.query)
            res.status(302).send(result);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new GeneralController();