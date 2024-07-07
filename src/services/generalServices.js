const { User, Book } = require('../models/models');
const { Op } = require('sequelize');

class GeneralServices {
    async quantityAll() {
        const user = await User.count()
        const book = await Book.count()
        return { user, book }
    }

    async pageData({ page = 1, limit = 10 }) {
        if (page == undefined || limit == undefined) {
            return await Book.findAll({
                include: [{ model: User }]
            })
        }

        const offset = (page - 1) * limit;
        const { rows } = await Book.findAndCountAll({
            include: [
                {
                    model: User,
                }
            ],
            limit: limit,
            offset: offset
        })

        return rows
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

module.exports = new GeneralServices();