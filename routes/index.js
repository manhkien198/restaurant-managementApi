const userRouter = require("./user");
const roleRouter = require("./role");
function routes(app) {
  app.use("/auth", userRouter);
  app.use("/roles", roleRouter);
}

module.exports = routes;
