const express = require("express");
const auth = require("../middleware/auth");
const noCors = require("../middleware/noCors");
const router = express.Router();
const DashboardController = require("../controller/DashboardController");

router.get("/", auth, noCors, DashboardController.index);
module.exports = router;
