const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./db.connection");

class User extends Model {}
User.init(
  {
    phoneNumber: DataTypes.STRING,
    deviceuuid: DataTypes.STRING,
    country: DataTypes.STRING,

    phoneNumber: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
