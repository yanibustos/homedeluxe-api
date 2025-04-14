const { sequelize, DataTypes, Model } = require("../setup");
const Product = require("./Product");
const slugify = require("slugify");

class Category extends Model {}
Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    slug: {
      type: DataTypes.STRING,
      field: "slug",
      defaultValue: "",
    },
  },

  {
    sequelize,
    modelName: "category",
    paranoid: true,
    hooks: {
      beforeCreate: (category) => {
        category.slug = slugify(category.name, { lower: true, strict: true });
      },
      beforeUpdate: (category) => {
        if (category.name) {
          category.slug = slugify(category.name, { lower: true, strict: true });
        }
      },
      beforeDestroy: async (category) => {
        if (category.name === "Uncategorized") {
          throw new Error('"Uncategorized" can\'t be deleted.');
        }

        const uncategorized = await Category.findOne({
          where: { name: "Uncategorized" },
        });

        if (!uncategorized) {
          throw new Error('"Uncategorized" does not exist, please create it first.');
        }

        await Product.update(
          { categoryId: uncategorized.id },
          { where: { categoryId: category.id } },
        );
      },
    },
  },
);

module.exports = Category;
