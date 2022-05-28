const DashboardSchema = require("../model/dashboard");
class DashboardController {
  //GET /role
  index(req, res, next) {
    DashboardSchema.find({})
      .then((data) => {
        return res.json(data);
      })
      .catch(next);
  }
}
module.exports = new DashboardController();
