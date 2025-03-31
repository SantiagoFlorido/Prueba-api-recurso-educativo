const User = require('./users.models');
const Taller = require('./talleres.models');
const UsuarioTaller = require('./usuariosTalleres.models');

const initModels = () => {
    // Relación 1: Usuario -> UsuarioTaller (Un usuario puede estar en muchos talleres)
    User.hasMany(UsuarioTaller, {
        foreignKey: 'id_usuario',
        as: 'talleres_asignados' 
    });
    UsuarioTaller.belongsTo(User, {
        foreignKey: 'id_usuario',
        as: 'usuario' 
    });

    // Relación 2: Taller -> UsuarioTaller (Un taller puede tener muchos usuarios)
    Taller.hasMany(UsuarioTaller, {
        foreignKey: 'id_taller',
        as: 'usuarios_inscritos' 
    });
    UsuarioTaller.belongsTo(Taller, {
        foreignKey: 'id_taller',
        as: 'taller' 
    });

    // No hay relación directa User <-> Taller (solo a través de UsuarioTaller)
};

module.exports = initModels;