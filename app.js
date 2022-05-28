require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();
const routes = require("./routes/index");
app.use(express.json());
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
routes(app);
module.exports = app;
