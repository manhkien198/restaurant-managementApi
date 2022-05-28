const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  role: String,
  description: String,
});

module.exports = mongoose.model("role", RoleSchema, "roles");
