const { sequelize, Model, DataTypes } = require("../setup");
const Product = require("./Product");
const User = require("./User");

class Order extends Model {}
Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: User,
      required: true,
    },

    date: {
      type: DataTypes.DATE,
      required: true,
    },

    products: [
      {
        productId: {
          type: DataTypes.INTEGER,
          ref: Product,
          required: true,
        },
        quantity: {
          type: DataTypes.INTEGER,
          required: true,
        },

        price: {
          type: DataTypes.DECIMAL,
          required: true,
        },

        stock: {
          type: DataTypes.INTEGER,
          required: true,
        },

        sku: {
          type: DataTypes.STRING,
          required: true,
        },
      },
    ],
  },

  // Order.belongsToMany(Product, { through: "OrderProduct"}),
  { sequelize, modelName: "order" },
);

module.exports = Order;
