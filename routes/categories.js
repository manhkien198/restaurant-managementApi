const express = require('express');

const router = express.Router();
const CategoryController = require('../controller/CategoryController');

router.get('/', CategoryController.index);
module.exports = router;
