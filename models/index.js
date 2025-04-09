const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const OrderProduct = require("./OrderProduct");

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Order.belongsToMany(Product, { through: "OrderProduct", foreignKey: "orderId", as: "products" });
Product.belongsToMany(Order, { through: "OrderProduct", foreignKey: "productId", as: "orders" });

module.exports = {
  User,
  Order,
  Product,
  OrderProduct,
};
