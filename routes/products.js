const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();
const ProductSchema = require("../controller/ProductSchema");

router.get("/", auth, ProductSchema.index);
module.exports = router;
