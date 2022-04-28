'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collegeRegisteration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.alumniregistration,{foreignKey:'CollegeId'})

    }
  };
  collegeRegisteration.init({
    CollegeName: DataTypes.STRING,
    CollegeId: DataTypes.INTEGER,
    collegeEmail: DataTypes.STRING,
    CollegePhone: DataTypes.BIGINT,
    CollegePassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'collegeRegisteration',
  });
  return collegeRegisteration;
};