const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const pagesRoutes = require("./pagesRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {

    app.use("/", authRoutes);
    app.use("/users", userRoutes);
    app.use("/products", productRoutes);
    app.use("/admin", adminRoutes)
    app.use("/", pagesRoutes);
    app.use("/order", orderRoutes);
    

};
