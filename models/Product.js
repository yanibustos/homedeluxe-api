const { sequelize, Model, DataTypes } = require("../setup");



class Product extends Model { }
Product.init(
    {

        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        category: DataTypes.STRING,
        price: DataTypes.FLOAT,
        currency: DataTypes.STRING,
        stock: DataTypes.TINYINT,
        featured: DataTypes.BOOLEAN,
        img: {
            type: DataTypes.JSON,
            field: 'img',
            defaultValue: {}
        },
    },
    { sequelize, modelName: "product" }
);



module.exports = Product