const router = require('express').Router();
const bookControllers = require('../controllers/bookControllers');

router.route('/')
    .get(bookControllers.getBooks)
    .post(bookControllers.addBook);

router.route('/:id')
    .get(bookControllers.getBook)
    .patch(bookControllers.updateBook)
    .delete(bookControllers.deleteBook);

module.exports = router;