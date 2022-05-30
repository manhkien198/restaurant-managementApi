const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  fullname: String,
  position: String,
  role: String,
});

module.exports = mongoose.model('employee', EmployeeSchema);
