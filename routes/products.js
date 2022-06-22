const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const ProductController = require('../controller/ProductController');

router.get('/', auth, ProductController.index);
router.get('/:category_id', auth, ProductController.showByFilter);

module.exports = router;
