const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: String,
  id: Number,
  img: String,
});

module.exports = mongoose.model("category", CategorySchema);
