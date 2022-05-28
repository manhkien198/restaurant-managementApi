const DashboardSchema = require("../model/dashboard");
class DashboardController {
  //GET /role
  index(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    ); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    ); // If needed
    res.setHeader("Access-Control-Allow-Credentials", true); // If needed
    DashboardSchema.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
}
module.exports = new DashboardController();
