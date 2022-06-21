const userRouter = require("./user");
const roleRouter = require("./role");
const dashboardRouter = require("./dashboard");
const foodRouter = require("./food");
const employeeRouter = require("./employee");
const productRouter = require("./products");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/roles", roleRouter);
  app.use("/dashboard", dashboardRouter);
  app.use("/food", foodRouter);
  app.use("/employee", employeeRouter);
  app.use("/products", productRouter);
}

module.exports = routes;
