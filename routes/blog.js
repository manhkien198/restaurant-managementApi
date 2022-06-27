const express = require('express');

const router = express.Router();
const BlogController = require('../controller/BlogController');

router.get('/:_id', BlogController.showDetail);
router.get('/', BlogController.index);

module.exports = router;
