const generalServices = require('../services/generalServices');

class GeneralController {

    async quantity(req, res) {
        await generalServices.quantityAll()
            .then((data) => res.send(`Количество пользователей: ${data.user}\nКоличество книг: ${data.book}`))
            .catch((err) => res.send(err.message));
    }

    async search(req, res) {
        await generalServices.search(req.query)
            .then((data) => res.send(data))
            .catch((err) => res.send(err.message));
    }

    async page(req, res) {
        await generalServices.pageData(req.query)
            .then((data) => res.send(data))
            .catch((err) => res.send(err.message));
    }

}

module.exports = new GeneralController();