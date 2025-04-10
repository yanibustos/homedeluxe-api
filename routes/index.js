const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const orderRoutes = require("./orderRoutes");
const adminRoutes = require("./adminRoutes");
const { expressjwt: checkJwt } = require("express-jwt");

module.exports = (app) => {
  app.use("/", authRoutes);
  app.use("/products", productRoutes);

  app.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

  app.use("/users", userRoutes);
  app.use("/orders", orderRoutes);
  app.use("/admin", adminRoutes);
};
