const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const CategoryController = require('../controller/CategoryController');

router.get('/', auth, CategoryController.index);
module.exports = router;
