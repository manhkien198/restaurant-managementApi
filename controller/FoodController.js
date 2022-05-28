const FoodSchema = require("../model/food");
class FoodController {
  //GET /role
  index(req, res, next) {
    FoodSchema.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
}
module.exports = new FoodController();
