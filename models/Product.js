const { sequelize, Model, DataTypes } = require("../setup");
const slugify = require("slugify");

class Product extends Model {}
Product.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    currency: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    featured: DataTypes.BOOLEAN,
    image: {
      type: DataTypes.JSON,
      field: "image",
      defaultValue: {},
    },
    slug: {
      type: DataTypes.STRING,
      field: "slug",
      defaultValue: "",
    },
  },
//       Product.belongsToMany(orderBy, { through: "OrderProduct" }),
  {
    sequelize,
    modelName: "product",
    hooks: {
      beforeCreate: (product) => {
        product.slug = slugify(product.name, { lower: true, strict: true });
      },
      beforeUpdate: (product) => {
        if (product.name) {
          product.slug = slugify(product.name, { lower: true, strict: true });
        }
      },
    },
  },

  Product.belongsToMany(orderBy, { through: "OrderProduct", foreignKey: "productId", otherKey: "orderId" }),
  { sequelize, modelName: "product" }
);

module.exports = Product;
