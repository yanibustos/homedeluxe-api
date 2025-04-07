const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const pagesRoutes = require("./pagesRoutes");
const orderRoutes = require("./orderRoutes");
const adminRoutes = require("./adminRoutes");

module.exports = (app) => {

    app.use("/", authRoutes);
    app.use("/users", userRoutes);
    app.use("/products", productRoutes);
    app.use("/role", roleRoutes);
    app.use("/orders", orderRoutes);
    app.use("/admin", adminRoutes)
    app.use("/", pagesRoutes);
    

};
