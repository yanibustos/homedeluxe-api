const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class BaseModel extends Model {
  static init(attributes = {}, options = {}) {
    if (!attributes.id) {
      attributes.id = {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
        primaryKey: true,
      };
    }

    return super.init(attributes, options);
  }
}

module.exports = BaseModel;
