const { User, UserSchema } = require('./users.model');

//esta funcion va a recibir por la conexion y va a usar el modelo
function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
}

//vamos a usar esta funcion en sequelize.js
module.exports = setupModels;