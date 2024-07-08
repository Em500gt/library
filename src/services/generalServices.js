const { User, Book, BookUser } = require('../models/models');
const sequelize = require('../config/db');

class GeneralServices {
    async quantityAll() {
        const user = await User.count()
        const book = await Book.count()
        return { user, book }
    }

    async pageData({ page = 1, limit = 10 }) {
        const offset = (page - 1) * limit;
        const { rows } = await Book.findAndCountAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email', 'Registered'],
                    through: { attributes: [] }
                }
            ],
            limit: limit,
            offset: offset
        })

        return rows
    }

    async addBU(bookId, userId) {
        await sequelize.transaction(async (t) => {
            const book = await Book.findByPk(bookId, { transaction: t });
            const user = await User.findByPk(userId, { transaction: t });

            if (!book) {
                throw new Error(`Book with ID ${bookId} not found.`);
            }
            if (!user) {
                throw new Error(`User with ID ${userId} not found.`);
            }

            await BookUser.create({ BookId: bookId, UserId: userId }, { transaction: t });
        })
        return { message: 'Пользователь взял определенную книгу' };
    }

    async deleteBU(bookId, userId) {
        await sequelize.transaction(async (t) => {
            const book = await Book.findByPk(bookId, { transaction: t });
            const user = await User.findByPk(userId, { transaction: t });

            if (!book) {
                throw new Error(`Book with ID ${bookId} not found.`);
            }
            if (!user) {
                throw new Error(`User with ID ${userId} not found.`);
            }

            const check = await  BookUser.findOne({
                where: {
                    BookId: bookId,
                    UserId: userId
                },
                transaction: t
            });

            if(!check){
                throw new Error(`Пользователь под ID ${userId} не брал книгу под ID ${bookId}`);
            }
            
            await check.destroy({transaction: t});
        })
        return { message: 'Книга успешно возвращена пользователем' }
    }
}

module.exports = new GeneralServices();