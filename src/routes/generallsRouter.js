const router = require('express').Router();
const generalController = require('../controllers/generalControllers');
const validate = require('../helpers/validation');

router.get('/quantity', generalController.quantity);
router.get('/search',validate.validAuthorAndName(), generalController.search);
router.get('/', validate.validPageAndLimit(), generalController.page);

module.exports = router;