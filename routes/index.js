const userRouter = require("./user");
const roleRouter = require("./role");
const dashboardRouter = require("./dashboard");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/roles", roleRouter);
  app.use("/dashboard", dashboardRouter);
}

module.exports = routes;
