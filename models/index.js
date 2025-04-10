const User = require("./User");
const Order = require("./Order");

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  User,
  Order,
};
