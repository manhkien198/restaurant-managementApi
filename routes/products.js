const express = require('express');

const router = express.Router();
const ProductController = require('../controller/ProductController');

router.get('/:category_id', ProductController.showByFilter);
router.get('/', ProductController.index);

module.exports = router;
