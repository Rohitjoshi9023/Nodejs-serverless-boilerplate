const { Sequelize } = require("sequelize");

const db = config("database");
const default_conn = db.default_conn;

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  db[default_conn].database,
  db[default_conn].username,
  db[default_conn].password,
  {
    host: db[default_conn].host,
    dialect: default_conn
  }
);

module.exports = { sequelize };
