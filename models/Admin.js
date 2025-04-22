const { sequelize, DataTypes, Model } = require("../setup");
class Admin extends Model {
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
Admin.init(
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
    avatar: {
      type: DataTypes.STRING,
      field: "avatar",
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },

  {
    sequelize,
    modelName: "admin",
    paranoid: true,
  },
);

module.exports = Admin;
