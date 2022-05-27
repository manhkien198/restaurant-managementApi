const userRouter = require("./user");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/role", userRouter);
}

module.exports = routes;
