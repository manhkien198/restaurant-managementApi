const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: String,
  id: Number,
});

module.exports = mongoose.model('category', CategorySchema);
