const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();
const RoleController = require("../controller/RoleController");

router.get("/", auth, RoleController.index);
module.exports = router;
