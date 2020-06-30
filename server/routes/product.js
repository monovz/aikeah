const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const {authentication} = require('../middlewares/auth')


router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getProductById)

router.use(authentication);
router.post('/', ProductController.addProduct)

router.put('/:id', ProductController.updateProduct)

router.delete('/:id', ProductController.deleteProduct)

module.exports = router;