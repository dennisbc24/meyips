const {Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

//este es el JSON que sera el modelo de la tabla users:
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING

    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        dafaultValue: Sequelize.NOW
    }
}

//creamos esta clase para heredar los metodos statics de Model.
class User extends Model {
    static associate() {
        //associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {USER_TABLE, UserSchema, User}