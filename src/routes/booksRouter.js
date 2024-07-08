const router = require('express').Router();
const bookControllers = require('../controllers/bookControllers');
const validate = require('../helpers/validation');

/**
 * @swagger
 * /app/book:
 *   get:
 *     summary: Все книги
 *     description: Вывод всех книг, находящихся в системе.
 *     tags:
 *       - Book
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *          application/json: 
 *           schema:
 *             type: array
 *             $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad Request
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        name:
 *          type: string
 *          example: "The Gambler"
 *        author:
 *          type: string
 *          example: "Fyodor Dostoevsky"
 *        year:
 *          type: integer
 *          example: 1866
 *        numberOfPage:
 *          type: integer
 *          example: 288
 */

/**
 * @swagger
 * /app/book:
 *    post:
 *      summary: Добавление книги
 *      description: Добавление книг в систему.
 *      tags:
 *        - Book
 *      requestBody:
 *        $ref: "#/components/requestBodies/Books"
 *      responses:
 *        201:
 *          description: Created
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 * components:
 *   requestBodies:
 *     Books:
 *       description: Свойства книги, которые можно добавить.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "The Gambler"
 *               author:
 *                 type: string
 *                 example: "Fyodor Dostoevsky"
 *               year:
 *                 type: integer
 *                 example: 1866
 *               numberOfPage:
 *                 type: integer
 *                 example: 288
 */

router.route('/')
    .get(bookControllers.getBooks)
    .post(validate.validBook(), bookControllers.addBook);

/**
 * @swagger
 * /app/book/search:
 *   get:
 *     summary: Поиск
 *     description: Производит поиск по query-параметрам. Query-параметры указывать не обязательно.
 *     tags:
 *       - Book
 *     parameters:
 *         - in: query
 *           name: name
 *           schema:
 *              type: string
 *         - in: query
 *           name: author
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       500:
 *          description: Internal Server Error
 */

router.get('/search', validate.validAuthorAndName(), bookControllers.search);

/**
 * @swagger
 * /app/book/{id}:
 *   get:
 *     summary: Одна книга
 *     description: Вывод одной книги, находящейся в системе, по ID книги.
 *     tags:
 *       - Book
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id from Book
 *         required: true
 *     responses:
 *       200:
 *         description: A list of Book.
 *         content:
 *          application/json: 
 *           schema:
 *             type: array
 *             $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad Request
 *       404: 
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /app/book/{id}:
 *    patch:
 *      summary: Обновление книги
 *      description: Обновление данных о книге. Разрешается обновлять различные свойства книги.
 *      tags:
 *        - Book
 *      parameters:
 *       - name: id
 *         in: path
 *         description: id from Book 
 *         required: true
 *      requestBody:
 *        $ref: "#/components/requestBodies/BookUpdate"
 *      responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       404: 
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 * components:
 *   requestBodies:
 *     BookUpdate:
 *       description: Свойства книги, которые можно изменить (ИЗМЕНЯТЬ МОЖНО ПО ОТДЕЛЬНОСТИ).
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "The Gambler"
 *               author:
 *                 type: string
 *                 example: "Fyodor Dostoevsky"
 *               year:
 *                 type: integer
 *                 example: 1866
 *               numberOfPage:
 *                 type: integer
 *                 example: 288
 */

/**
 * @swagger
 * /app/book/{id}:
 *    delete:
 *      summary: Удаление книги
 *      description: Удаление книги из системы по ID книги.
 *      tags:
 *        - Book
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad Request
 *       404: 
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

router.route('/:id')
    .get(validate.validId(), bookControllers.getBook)
    .patch(validate.validId(), validate.validBookUpdate(), bookControllers.updateBook)
    .delete(validate.validId(), bookControllers.deleteBook);

module.exports = router;