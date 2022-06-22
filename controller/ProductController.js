const ProductSchema = require("../model/product");
const CategorySchema = require("../model/category");
class ProductController {
  //GET /role
  async index(req, res, next) {
    try {
      let { page, size, sort } = req.query;
      let sortQuery = ProductSchema.find({});
      if (req.query.hasOwnProperty("sort")) {
        const arrSort = sort.split("-");
        const obj = {};
        obj[arrSort[0]] = arrSort[1];
        sortQuery = sortQuery.sort(obj);
      }
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
      const skip = (page - 1) * size;
      const count = await ProductSchema.count();
      // We pass 1 for sorting data in
      // ascending order using ids
      const products = await sortQuery.skip(skip).limit(limit);
      res.send({
        data: products,
        total: count,
        page,
        size,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
  async showByFilter(req, res, next) {
    try {
      let { page, size, sort } = req.query;

      const cateId = req.params;
      let titleCate;
      await CategorySchema.find({ _id: cateId.category_id })
        .then((category) => {
          titleCate = category[0].title;
        })
        .catch((err) => {
          console.log(err);
        });
      if (!page) {
        page = 1;
      }

      if (!size) {
        size = 10;
      }
      let sortQuery = ProductSchema.find({
        category: titleCate,
      });
      if (req.query.hasOwnProperty("sort")) {
        const arrSort = sort.split("-");
        const obj = {};
        obj[arrSort[0]] = arrSort[1];
        sortQuery = sortQuery.sort(obj);
      }
      const limit = parseInt(size);
      const skip = (page - 1) * size;
      const count = await sortQuery.count();

      const products = await sortQuery.skip(skip).limit(limit);
      res.send({
        data: products,
        total: count,
        page,
        size,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
module.exports = new ProductController();
