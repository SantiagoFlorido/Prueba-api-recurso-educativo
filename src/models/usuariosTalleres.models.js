const { DataTypes } = require('sequelize');
const db = require('../utils/database');

/*
{
    id: 1,
    id_usuario: 1, // FK -> usuarios.id_usuario (no usuarios.id)
    id_taller: 1,  // FK -> talleres.id_taller (no talleres.id)
    estado: 'abierto' // 'abierto' o 'finalizado'
}
*/

const UsuarioTaller = db.define('usuarios_talleres', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // Nombre de la tabla en la BD
            key: 'id'  
        }
    },
    id_taller: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'talleres', // Nombre de la tabla en la BD
            key: 'id'   
        }
    },
    estadoabierto: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['noabierto', 'abierto']]
        }
    },
    estadofinal: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['nofinalizado', 'finalizado']]
        }
    }
}, {
    timestamps: false
});

module.exports = UsuarioTaller;