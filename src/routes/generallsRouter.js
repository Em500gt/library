const router = require('express').Router();
const generalController = require('../controllers/generalControllers');
const validate = require('../helpers/validation');

/**
 * @swagger
 * /app/general/quantity:
 *   get:
 *     summary: Подсчет
 *     description: Выводит количество пользователей и книг в системе.
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 */

router.get('/quantity', generalController.quantity);

/**
 * @swagger
 * /app/general/:
 *   get:
 *     summary: Пагинация
 *     description: Выводит книги и пользователей, взявших книги, с использованием пагинации. По умолчанию page = 1, limit = 10.
 *     tags:
 *       - General
 *     parameters:
 *         - in: query
 *           name: page
 *           schema:
 *              type: integer
 *         - in: query
 *           name: limit
 *           schema:
 *              type: integer
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       500:
 *          description: Internal Server Error
 */

router.get('/', validate.validPageAndLimit(), generalController.page);

/**
 * @swagger
* /app/general/books/{bookId}/users/{userId}:
 *   post:
 *     summary: Привязка книг
 *     description: Добавление пользователю определенной книги.
 *     tags:
 *       - General
 *     parameters:
 *       - name: bookId
 *         in: path
 *         description: id from Book
 *         required: true
 *       - name: userId
 *         in: path
 *         description: id from User
 *         required: true
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
* /app/general/books/{bookId}/users/{userId}:
 *   delete:
 *     summary: Удаление привязки
 *     description: Удаление пользователя с определенной книги.
 *     tags:
 *       - General
 *     parameters:
 *       - name: bookId
 *         in: path
 *         description: id from Book
 *         required: true
 *       - name: userId
 *         in: path
 *         description: id from User
 *         required: true
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

router.route('/books/:bookId/users/:userId')
    .post(validate.validUserIdBookId(), generalController.createBookUserRelation)
    .delete(validate.validUserIdBookId(), generalController.deleteBookUserRelation);

module.exports = router;