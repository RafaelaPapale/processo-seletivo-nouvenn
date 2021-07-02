//Biblioteca sequelize
const Sequelize = require ('sequelize');

//Modo de ambiente ou desenvolvimento
const environment = process.env.NODE_ENV || 'development';
const config = require ('../config/config.js')[environment];

//Passando para o sequelize os dados do banco de dados
const sequelize = new Sequelize (
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;