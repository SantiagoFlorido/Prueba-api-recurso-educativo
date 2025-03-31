const { DataTypes } = require('sequelize');
const db = require('../utils/database');

/*
{
    id: 1,
    nombre_taller: 'string'
}
*/

const Taller = db.define('talleres', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        
    },
    nombre_taller: {
        type: DataTypes.STRING(200),
        allowNull: false,
        
    }
}, {
    timestamps: false
});

module.exports = Taller;