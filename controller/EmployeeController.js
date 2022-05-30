const EmployeeSchema = require('../model/employee');
class EmployeeController {
  //GET /role
  index(req, res, next) {
    EmployeeSchema.find({})
      .then((employees) => {
        res.json({ status: 'success', data: employees });
      })
      .catch(next);
  }
}
module.exports = new EmployeeController();
