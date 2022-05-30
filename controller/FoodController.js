const FoodSchema = require('../model/food');
class FoodController {
  //GET /role
  async index(req, res, next) {
    try {
      let { page, size, sort } = req.query;

      // If the page is not applied in query.
      if (!page) {
        // Make the Default value one.
        page = 1;
      }

      if (!size) {
        size = 10;
      }

      //  We have to make it integer because
      // query parameter passed is string
      const limit = parseInt(size);

      // We pass 1 for sorting data in
      // ascending order using ids
      const foods = await FoodSchema.find()
        .sort({ votes: 1, _id: 1 })
        .limit(limit);
      res.send({
        page,
        size,
        foods: foods,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
module.exports = new FoodController();
