const ProductSchema = require('../model/product');
class ProductController {
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
      let productLength;
      //  We have to make it integer because
      // query parameter passed is string
      const limit = parseInt(size);
      const skip = (page - 1) * size;

      await ProductSchema.find({})
        .then((product) => {
          productLength = product.length;
        })
        .catch((err) => {
          console.log(err);
        });
      // We pass 1 for sorting data in
      // ascending order using ids
      const products = await ProductSchema.find().skip(skip).limit(limit);
      res.send({
        data: products,
        total: productLength,
        page,
        size,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
module.exports = new ProductController();
