const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const EmployeeController = require('../controller/EmployeeController');

router.get('/', auth, EmployeeController.index);
module.exports = router;
