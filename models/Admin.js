const { sequelize, Model, DataTypes } = require("../setup");


class Admin extends Model { }
Admin.init(
    {
        firstname: {
            type: DataTypes.STRING(50),
            field: 'firstname',
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            field: 'lastname',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email',
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100),
            field: 'password',
            allowNull: false
        },                        
        avatar: {
            type: DataTypes.STRING,
            field: 'avatar'
        }    


    },


    { sequelize, modelName: "admin" }
);




module.exports = Admin

