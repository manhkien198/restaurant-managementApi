const userRouter = require("./user");
function routes(app) {
  app.use("/auth", userRouter);
}

module.exports = routes;
