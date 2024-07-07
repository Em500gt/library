const router = require('express').Router();
const generalController = require('../controllers/generalControllers');

router.get('/quantity', generalController.quantity);
router.get('/search', generalController.search);
router.get('/', generalController.page);

module.exports = router;