const { sequelize, Model, DataTypes } = require("../setup");


class Role extends Model { }

Role.init(
    {

        name: DataTypes.STRING,
        value: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
        }


    },


    { sequelize, modelName: "role" }
);


  
    module.exports = Role;

