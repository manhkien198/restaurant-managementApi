const RoleSchema = require("../model/role");
class UserController {
  //GET /role
  index(req, res, next) {
    RoleSchema.find({})
      .then((roles) => {
        res.json(roles);
      })
      .catch(next);
  }
}
module.exports = new UserController();
