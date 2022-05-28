const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  strMeal: String,
  strMealThumb: String,
  idMeal: String,
});

module.exports = mongoose.model("food", FoodSchema);
