const { sequelize, DataTypes } = require("../setup");
const BaseModel = require("./BaseModel");

class Order extends BaseModel {}

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
