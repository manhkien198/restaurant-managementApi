const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();
const FoodController = require("../controller/FoodController");

router.get("/", auth, FoodController.index);
module.exports = router;
