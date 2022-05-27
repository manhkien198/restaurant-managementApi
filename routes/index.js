const userRouter = require("./user");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/roles", userRouter);
}

module.exports = routes;
