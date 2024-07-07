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

/**
 * @swagger
 * /app/general/search:
 *   get:
 *     summary: Поиск
 *     description: Производит поиск по query-параметрам. Query-параметры указывать не обязательно.
 *     tags:
 *       - General
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

router.get('/quantity', generalController.quantity);
router.get('/search',validate.validAuthorAndName(), generalController.search);
router.get('/', validate.validPageAndLimit(), generalController.page);

module.exports = router;