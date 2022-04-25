'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('collegeRegisterations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CollegeName: {
        type: Sequelize.STRING
      },
      CollegeId: {
        type: Sequelize.INTEGER
      },
      collegeEmail: {
        type: Sequelize.STRING
      },
      CollegePhone: {
        type: Sequelize.BIGINT
      },
      CollegePassword: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('collegeRegisterations');
  }
};