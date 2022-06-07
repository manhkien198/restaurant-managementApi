const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  fullname: String,
  position: String,
  role: String,
  image:String
});

module.exports = mongoose.model('employee', EmployeeSchema);
