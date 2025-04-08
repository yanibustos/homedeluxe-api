const { sequelize, Model, DataTypes } = require("../setup");

class Order extends Model {}

Order.init(
  {
    status: {
      type: DataTypes.ENUM("pending", "paid", "processing", "shipped", "canceled"),
      allowNull: false,
      defaultValue: "pending",
    },

    totalPrice: {
      type: DataTypes.FLOAT,
    },

    shippingAdress: {
      type: DataTypes.STRING,
    },

    paymentMethod: {
      type: DataTypes.ENUM("VISA", "MASTERCARD", "Mercado Pago", "PayPal", "AMEX", "Credit Card"),
      allowNull: false,
      defaultValue: "Credit Card",
    },
  },
  {
    sequelize,
    modelName: "order",
  },
);

module.exports = Order;
