const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const DashboardController = require("../controller/DashboardController");

router.get("/", auth, DashboardController.index);
module.exports = router;
