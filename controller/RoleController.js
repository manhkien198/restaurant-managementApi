const RoleSchema = require("../model/role");
class RoleController {
  //GET /role
  index(req, res, next) {
    RoleSchema.find({})
      .then((roles) => {
        res.json({ status: "success", data: roles });
      })
      .catch(next);
  }
}
module.exports = new RoleController();
