const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const OrderProduct = require("./OrderProduct");

User.hasMany(Order, { foreignKey: "userId", as: "userOrders" });
Order.belongsTo(User, { foreignKey: "userId", as: "orderUser" });

Order.belongsToMany(Product, { through: "OrderProduct", foreignKey: "orderId" });
Product.belongsToMany(Order, { through: "OrderProduct", foreignKey: "productId" });

module.exports = {
  User,
  Order,
  Product,
  OrderProduct,
};
