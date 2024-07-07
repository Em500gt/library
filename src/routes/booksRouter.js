const router = require('express').Router();
const bookControllers = require('../controllers/bookControllers');
const validate = require('../helpers/validation');

router.route('/')
    .get(bookControllers.getBooks)
    .post(validate.validBook(), bookControllers.addBook);

router.route('/:id')
    .get(validate.validId(), bookControllers.getBook)
    .patch(validate.validId(), validate.validBookUpdate(), bookControllers.updateBook)
    .delete(validate.validId(), bookControllers.deleteBook);

module.exports = router;