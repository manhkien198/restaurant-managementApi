const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  month: String,
  year: String,
  importCost: String,
  turnover: String,
  employee: String,
  employeeSalary: String,
  serviceCost: String,
  interest: String,
});

module.exports = mongoose.model("dashboard", DashboardSchema);
