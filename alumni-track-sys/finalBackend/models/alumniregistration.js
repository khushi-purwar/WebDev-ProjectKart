'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumniregistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.collegeRegisteration,{foreignKey:'CollegeId'})
      // define association here
    }
  }
  alumniregistration.init({
    Name: DataTypes.STRING,
    EnrollmentNO: DataTypes.INTEGER,
    CollegeId: DataTypes.INTEGER,
    EmailId: DataTypes.STRING,
    Password: DataTypes.STRING,
    CollegeName: DataTypes.STRING,
    QualificationDetails: DataTypes.STRING,
    YearOfPassing: DataTypes.INTEGER,
    CurrentlyDoing: DataTypes.STRING,
    FurtherPlans: DataTypes.STRING,
    ContactNo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'alumniregistration',
  });
  return alumniregistration;
};