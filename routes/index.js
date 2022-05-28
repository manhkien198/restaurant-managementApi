const userRouter = require("./user");
const roleRouter = require("./role");
const dashboardRouter = require("./dashboard");
const cors = require("cors");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/roles", roleRouter);
  app.use("/dashboard", cors(), dashboardRouter);
}

module.exports = routes;
