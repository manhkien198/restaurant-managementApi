const RoleSchema = require("../model/role");
class RoleController {
  //GET /role
  index(req, res, next) {
    RoleSchema.find({})
      .then((roles) => {
        res.json(roles);
      })
      .catch(next);
  }
}
module.exports = new RoleController();
