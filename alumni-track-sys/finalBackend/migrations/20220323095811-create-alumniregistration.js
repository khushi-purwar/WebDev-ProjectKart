'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alumniregistrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      EnrollmentNO: {
        type: Sequelize.INTEGER
      },
      CollegeId: {
        type: Sequelize.INTEGER
      },
      EmailId: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      CollegeName: {
        type: Sequelize.STRING
      },
      QualificationDetails: {
        type: Sequelize.STRING
      },
      YearOfPassing: {
        type: Sequelize.INTEGER
      },
      CurrentlyDoing: {
        type: Sequelize.STRING
      },
      FurtherPlans: {
        type: Sequelize.STRING
      },
      ContactNo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alumniregistrations');
  }
};