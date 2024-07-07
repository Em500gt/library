const router = require('express').Router();
const userControllers = require('../controllers/userControllers');
const validate = require('../helpers/validation');

router.route('/')
    .get(userControllers.getUsers)
    .post(validate.validUser(), userControllers.createUser);

router.route('/:id')
    .get(validate.validId(), userControllers.getUser)
    .patch(validate.validId(), validate.validUserUpdate(), userControllers.updateUser)
    .delete(validate.validId(), userControllers.deleteUser);

module.exports = router;