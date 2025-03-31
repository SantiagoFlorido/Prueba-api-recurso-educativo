const { UsuarioTaller } = require('../models/usuariosTalleres.models');

const changeEstadoTallerUsuario = async (id_usuario_taller, estado) => {
    const data = await UsuarioTaller.update(
        { estado },
        { 
            where: { id: id_usuario_taller },
            validate: { isIn: [['abierto', 'finalizado']] } // Validación de Sequelize
        }
    );
    return data[0]; // Retorna 1 si se actualizó, 0 si no
};

module.exports = {
    changeEstadoTallerUsuario
};