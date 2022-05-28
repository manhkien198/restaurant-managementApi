const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const app = express();
const DashboardController = require("../controller/DashboardController");
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
router.get("/", auth, DashboardController.index);
module.exports = router;
