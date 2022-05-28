const userRouter = require("./user");
const roleRouter = require("./role");
const dashboardRouter = require("./dashboard");
const foodRouter = require("./food");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/roles", roleRouter);
  app.use("/dashboard", dashboardRouter);
  app.use("/food", foodRouter);
}

module.exports = routes;
