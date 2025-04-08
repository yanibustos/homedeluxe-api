const { sequelize, Model, DataTypes } = require("../setup");

const slugify = require("slugify");
const Product = require("./Product");

class Category extends Model {}
Category.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
    },
  },

    Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' }),
  

    // hizo falta un hook para que al eliminar una categoria no se borren los productos

    Category.beforeDestroy(async (category, options) => {   //migrar los productos a uncategorized antes de eliminar una categoria
    const { Product, Category } = category.sequelize.models;

    
    if (category.name === 'Uncategorized') {    // No permitir borrar "Uncategorized"
      throw new Error(' "Uncategorized" cant be deleted." ');
    }

    
    const uncategorized = await Category.findOne({   // Buscar la categoría "Uncategorized"
      where: { name: 'Uncategorized' }
    });

    if (!uncategorized) {
      throw new Error('"Uncategorized dont exist, please create first" ');
    }

   
    await Product.update(     // Migrar productos a "Uncategorized"
      { categoryId: uncategorized.id },
      { where: { categoryId: category.id } }
    );
  }),

  { sequelize, modelName: "product" }
);

module.exports = Category;
