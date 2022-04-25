require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.app = process.env.APP || 'dev';
CONFIG.APP_URL = process.env.APP_URL;
CONFIG.port =  process.env.PORT|| '3000';
CONFIG.node_env = process.env.NODE_ENV;
CONFIG.jwtsecret = process.env.SECRET_KEY


// CONFIG.mail = {
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure: process.env.MAIL_SECURE === 'true',
//     auth: {
//         user: process.env.MAIL_AUTH_USER,
//         pass: process.env.MAIL_AUTH_PW
//     }
// };



CONFIG.development = {

    dialect: process.env.DB_DIALECT,    // 'mysql';
    host: process.env.DB_HOST,       // 'localhost';
    port: process.env.DB_PORT,       // '3306';
    database: process.env.DB_NAME,       // 'name';
    username: process.env.DB_USER,       // 'root';
    password: process.env.DB_PASSWORD,   // 'db-password';
    logging: console.log
};

// CONFIG.production = {
//     dialect: process.env.DB_DIALECT,    // 'mysql';
//     host: process.env.DB_HOST,       // 'localhost';
//     port: process.env.DB_PORT,       // '3306';
//     database: process.env.DB_NAME,       // 'name';
//     username: process.env.DB_USER,       // 'root';
//     password: process.env.DB_PASSWORD,   // 'db-password';
//     logging: false
// };

// CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;