const {DataTypes} = require('sequelize')

const db = require('../utils/database')

/*
{
    id: 1,
    nombre: 'string',
    contraseña: 'string',
    rol: 'string'
}
*/ 

const User = db.define('usuarios',{
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
},{
    timestamps: false
})

module.exports = User

