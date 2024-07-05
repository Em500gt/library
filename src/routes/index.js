const router = require('express').Router();
const usersRouter = require('./usersRouter');
const booksRouter = require('./booksRouter');
// const controlsRouter = require('./controllsRouter');

router.use('/user', usersRouter);
router.use('/book', booksRouter);
// router.use('/control', controlsRouter);

module.exports = router;