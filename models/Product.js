const { sequelize, Model, DataTypes } = require("../setup");



class Product extends Model { }
Product.init(
    {

        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        info: DataTypes.TEXT,
        sku: DataTypes.UUID,
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

   Product.belongsToMany(orderBy, { through: "OrderProduct", foreignKey: "productId", otherKey: "orderId" }),
    { sequelize, modelName: "product" }
);



module.exports = Product