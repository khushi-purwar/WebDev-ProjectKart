'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CollegeEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CollegeEvents.init({
    CollegeId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CollegeEvents',
  });
  return CollegeEvents;
};