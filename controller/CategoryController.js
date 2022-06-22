const CategorySchema = require('../model/category');
const ProductSchema = require('../model/product');
class CategoryController {
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
      let categoriesLength;
      //  We have to make it integer because
      // query parameter passed is string
      const limit = parseInt(size);
      const skip = (page - 1) * size;

      await CategorySchema.find({})
        .then((category) => {
          categoriesLength = category.length;
        })
        .catch((err) => {
          console.log(err);
        });
      // We pass 1 for sorting data in
      // ascending order using ids
      const categories = await CategorySchema.find().skip(skip).limit(limit);
      res.send({
        data: categories,
        total: categoriesLength,
        page,
        size,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
module.exports = new CategoryController();
