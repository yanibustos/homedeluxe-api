const { sequelize, DataTypes, Model } = require("../setup");
const slugify = require("slugify");

class Product extends Model {}

Product.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    currency: {
      type: DataTypes.ENUM("USD", "UYU"),
      defaultValue: "USD",
      allowNull: false,
    },
    stock: DataTypes.INTEGER,
    featured: DataTypes.BOOLEAN,
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      field: "image",
      defaultValue: {},
    },
    slug: {
      type: DataTypes.STRING,
      field: "slug",
      defaultValue: "",
      unique: true,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "product",
    paranoid: true,
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
);

module.exports = Product;
