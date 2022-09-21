const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models')

//aqui estamos protegiendo las variables de entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

//esta es la uri de conexion
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);

//esto va a crear las tablas segun los models
//sequelize.sync();

module.exports = sequelize;
