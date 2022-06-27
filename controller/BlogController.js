const BlogSchema = require('../model/blog');
class RoleController {
  //GET /role
  async index(req, res, next) {
    try {
      let { page, size, sort, q } = req.query;
      let sortQuery = BlogSchema.find({});
      if (req.query.hasOwnProperty('q')) {
        sortQuery = BlogSchema.find({
          $or: [
            { title: { $regex: q } },
            { author: { $regex: q } },
            { description: { $regex: q } },
            { content: { $regex: q } },
          ],
        });
      }
      if (req.query.hasOwnProperty('sort')) {
        const arrSort = sort.split('-');
        const obj = {};
        const isValidType = ['asc', 'desc'].includes(arrSort[1]);
        obj[arrSort[0]] = isValidType ? arrSort[1] : 'desc';
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
      // We pass 1 for sorting data in
      // ascending order using ids
      const blogs = await sortQuery.skip(skip).limit(limit);
      const count = await sortQuery.clone().countDocuments();

      res.send({
        data: blogs ? blogs : [],
        total: count,
        page,
        size,
      });
    } catch (error) {
      console.log('error :', error);
      res.sendStatus(500);
    }
  }
  async showDetail(req, res, next) {
    try {
      const _id = req.params;
      let blog;
      await BlogSchema.findOne({ _id: _id })
        .then((x) => {
          blog = x;
        })
        .catch((err) => {
          console.log(err);
        });
      res.send({
        data: blog,
        total: 1,
        page: 1,
        size: 1,
      });
    } catch (error) {
      console.log('error :', error);
      res.sendStatus(500);
    }
  }
}
module.exports = new RoleController();
