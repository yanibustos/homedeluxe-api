const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    dialectModule: require("mysql2"),
    logging: false,
    port: process.env.DB_PORT,
  },
);

module.exports = { sequelize, Model, DataTypes };

// NO EDITAR
