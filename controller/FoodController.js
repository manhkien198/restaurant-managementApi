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
      let foodLength;
      //  We have to make it integer because
      // query parameter passed is string
      const limit = parseInt(size);
      const skip = (page - 1) * size;

      await FoodSchema.find({})
        .then((food) => {
          foodLength = food.length;
        })
        .catch((err) => {
          console.log(err);
        });
      // We pass 1 for sorting data in
      // ascending order using ids
      const foods = await FoodSchema.find().skip(skip).limit(limit);
      res.send({
        data: foods,
        total: foodLength,
        page,
        size,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
module.exports = new FoodController();
