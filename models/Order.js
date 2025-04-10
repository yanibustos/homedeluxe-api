const { sequelize, DataTypes, Model } = require("../setup");

class Order extends Model {}

Order.init(
  {
    status: {
      type: DataTypes.ENUM("pending", "paid", "processing", "shipped", "canceled"),
      allowNull: false,
      defaultValue: "pending",
    },

    items: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },

    shippingAddress: {
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
