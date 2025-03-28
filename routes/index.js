const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const profileRoutes = require("./profileRoutes");
const orderRoutes = require("./orderRoutes");
const pagesRoutes = require("./pagesRoutes");



/*
 * opcionales.
 * const wishlistRoutes = require("./wishlistRoutes");
 * const salesRoutes = require("./salesRoutes");
 */




module.exports = (app) => {

    app.use("/", authRoutes);
    app.use("/users", userRoutes);
    app.use("/products", productRoutes);
    app.use("/profile", profileRoutes);
    app.use("/order", orderRoutes);
  };