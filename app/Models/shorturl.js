'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShortUrl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShortUrl.init({
    long_url      : DataTypes.STRING,
    short_code    : DataTypes.STRING,
    date_created  : DataTypes.INTEGER,
    counter       : DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ShortUrl',
    timestamps: false,
    underscored: true
  });
  return ShortUrl;
};