const { sequelize, DataTypes } = require("../setup");
const BaseModel = require("./BaseModel");

class OrderProduct extends BaseModel {}

OrderProduct.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "id",
      },
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "OrderProduct",
    tableName: "order_products",
  },
);

module.exports = OrderProduct;
