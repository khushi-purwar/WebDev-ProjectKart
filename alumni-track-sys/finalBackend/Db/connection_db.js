
const models = require('../models');

module.exports = async function (eventEmitter) {
    try {
        await models.sequelize.authenticate();
        // eslint-disable-next-line no-undef
        console.log('Connected to SQL database:', config[config.node_env].database);
        /* if (_config.app === 'dev') {
            models.sequelize.sync(); //creates table if they do not already exist
            // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
        } */
        eventEmitter.emit('db-connected');
    } catch (err) {
        // eslint-disable-next-line no-undef
        console.error('Unable to connect to SQL database:', config[config.node_env].database, err);
    }
};