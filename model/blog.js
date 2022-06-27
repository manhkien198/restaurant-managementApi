const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

module.exports = mongoose.model('blog', BlogSchema);
