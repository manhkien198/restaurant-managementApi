const FoodSchema = require('../model/food');
class FoodController {
  //GET /role
  index(req, res, next) {
    let perPage = 12;
    let page = req.query.page || 1;
    FoodSchema.find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec((err, food) => {
        FoodSchema.countDocuments((err, count) => {
          // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          res.json(food); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
        });
      });
  }
}
module.exports = new FoodController();
