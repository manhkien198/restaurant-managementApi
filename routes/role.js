const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();
const RoleController = require("../controller/RoleController");

router.post("/", auth, RoleController.index);
module.exports = router;
