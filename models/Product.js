const { sequelize, Model, DataTypes } = require("../setup");



class Product extends Model { }
Product.init(
    {

        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        info: DataTypes.TEXT,
        sku: DataTypes.UUIDV1,
        category: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        currency: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        featured: DataTypes.BOOLEAN,
        image: {
            type: DataTypes.JSON,
            field: 'image',
            defaultValue: {}
        },
    },

    Product.belongsToMany(orderBy, { through: "OrderProduct" }),
    { sequelize, modelName: "product" }
);



module.exports = Product