const router = require('express').Router();
const userControllers = require('../controllers/userControllers');
const validate = require('../helpers/validation');

/**
 * @swagger
 * /app/user:
 *   get:
 *     summary: Все пользователи
 *     description: Вывод всех пользователей, находящихся в системе.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *          application/json: 
 *           schema:
 *             type: array
 *             $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad Request
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        name:
 *          type: string
 *          example: "Test"
 *        email:
 *          type: string
 *          example: "test@gmail.com"
 *        Pegistered:
 *          type: data
 *          example: "2024-07-06T17:52:57.861Z"
 */

/**
 * @swagger
 * /app/user:
 *    post:
 *      summary: Добавление пользователя
 *      description: Добавление пользователя в систему.
 *      tags:
 *        - User
 *      requestBody:
 *        $ref: "#/components/requestBodies/Users"
 *      responses:
 *        201:
 *          description: Created
 *        400:
 *          description: Bad Request
 *        500:
 *          description: Internal Server Error
 * components:
 *   requestBodies:
 *     Users:
 *       description: Свойства пользователя, которые можно добавить.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Test
 *               email:
 *                 type: string
 *                 example: test@gmail.com
 */

router.route('/')
    .get(userControllers.getUsers)
    .post(validate.validUser(), userControllers.createUser);

/**
 * @swagger
 * /app/user/{id}:
 *   get:
 *     summary: Один пользователь
 *     description: Вывод одного пользователя, находящейся в системе, по ID пользователя.
 *     tags:
 *       - User
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id from User
 *         required: true
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *          application/json: 
 *           schema:
 *             type: array
 *             $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad Request
 *       404: 
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /app/user/{id}:
 *    patch:
 *      summary: Обновление пользователя
 *      description: Обновление данных о пользователе. Разрешается обновлять различные свойства.
 *      tags:
 *        - User
 *      parameters:
 *       - name: id
 *         in: path
 *         description: id from User
 *         required: true
 *      requestBody:
 *        $ref: "#/components/requestBodies/UserUpdate"
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
 *     UserUpdate:
 *       description: Свойства пользователя, которые можно изменить (ИЗМЕНЯТЬ МОЖНО ПО ОТДЕЛЬНОСТИ).
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: TestUpdate
 *               email:
 *                 type: string
 *                 example: testUpdate@gmail.com
 */

/**
 * @swagger
 * /app/user/{id}:
 *    delete:
 *      summary: Удаление пользователя 
 *      description: Удаление пользователя из системы по ID пользователя.
 *      tags:
 *        - User
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
    .get(validate.validId(), userControllers.getUser)
    .patch(validate.validId(), validate.validUserUpdate(), userControllers.updateUser)
    .delete(validate.validId(), userControllers.deleteUser);

module.exports = router;