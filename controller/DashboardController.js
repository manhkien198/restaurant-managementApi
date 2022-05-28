const DashboardSchema = require("../model/dashboard");
class DashboardController {
  //GET /role
  index(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    DashboardSchema.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
}
module.exports = new DashboardController();
