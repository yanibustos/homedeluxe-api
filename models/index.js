const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  User,
  Order,
  Product,
};
