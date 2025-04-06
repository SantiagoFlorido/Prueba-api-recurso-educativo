const { UsuarioTaller } = require('../models/usuariosTalleres.models');

const changeEstadoTallerUsuario = async (id_usuario_taller, estadoabierto, estadofinal) => {
    const data = await UsuarioTaller.update(
        { 
            estadoabierto,
            estadofinal 
        },
        { 
            where: { id: id_usuario_taller },
            validate: {
                estadoabierto: {
                    isIn: [['noabierto', 'abierto']]
                },
                estadofinal: {
                    isIn: [['nofinalizado', 'finalizado']]
                }
            }
        }
    );
    return data[0]; // Retorna 1 si se actualizó, 0 si no
};

module.exports = {
    changeEstadoTallerUsuario
};