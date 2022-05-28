const DashboardSchema = require("../model/dashboard");
class DashboardController {
  //GET /role
  index(req, res, next) {
    DashboardSchema.find({})
      .then((roles) => {
        res.json(roles);
      })
      .catch(next);
  }
}
module.exports = new DashboardController();
