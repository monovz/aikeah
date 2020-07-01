const router = require('express').Router();
const TransactionController = require('../controllers/TransactionController');
const {authentication} = require('../middlewares/auth')

router.use(authentication);

router.get('/', TransactionController.getUserTransaction);
router.put('/', TransactionController.updateTransaction);

module.exports = router