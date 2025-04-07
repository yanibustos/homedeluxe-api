const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const pagesRoutes = require("./pagesRoutes");

module.exports = (app) => {
  app.use("/", authRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
  app.use("/admin", adminRoutes);
  app.use("/", pagesRoutes);
};
