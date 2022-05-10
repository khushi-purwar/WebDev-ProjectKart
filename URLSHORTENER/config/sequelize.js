const Sequelize = require('sequelize');
const config = require('./env');

// Set up the config
const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  port: config.mysql.port,
  dialect: 'mysql',
  logging: false, // Disable logging
  operatorsAliases: false, // Disable aliases,
});

sequelize.authenticate();

module.exports = { sequelize, Sequelize };
