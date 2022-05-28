require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes/index");
app.use(express.json());
app.use(cors());

routes(app);
module.exports = app;
