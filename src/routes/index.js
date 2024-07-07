const router = require('express').Router();
const usersRouter = require('./usersRouter');
const booksRouter = require('./booksRouter');
const generalRouter = require('./generallsRouter');

router.use('/user', usersRouter);
router.use('/book', booksRouter);
router.use('/general', generalRouter);

module.exports = router;