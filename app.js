require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();
const routes = require("./routes/index");
app.use(express.json());

routes(app);
module.exports = app;
