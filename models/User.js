const { sequelize, Model, DataTypes } = require("../setup");
const bcrypt = require("bcryptjs");

class User extends Model {
  async isValidPassword(password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw new Error("Password comparison failed");
    }
  }

  static async hashedPassword(password) {
    try {
      return await bcrypt.hash(password, 10);
    } catch (error) {
      throw new Error("Password hashing failed");
    }
  }
}

User.init(
  {
    firstname: {
      type: DataTypes.STRING(50),
      field: "firstname",
      allowNull: false,
    },

    lastname: {
      type: DataTypes.STRING(50),
      field: "lastname",
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(100),
      field: "email",
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING(100),
      field: "password",
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      field: "phone",
    },

    avatar: {
      type: DataTypes.STRING,
      field: "avatar",
    },

    country: {
      type: DataTypes.STRING(50),
      field: "country",
    },

    state: {
      type: DataTypes.STRING(50),
      field: "state",
    },

    city: {
      type: DataTypes.STRING(50),
      field: "city",
    },

    address: {
      type: DataTypes.TEXT,
      field: "address",
    },

    zip: {
      type: DataTypes.INTEGER,
      field: "zip",
    },
  },

  {
    sequelize,
    modelName: "user",
  },
);

module.exports = User;
