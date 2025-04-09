const UsuarioTaller = require('../models/usuariosTalleres.models');

const createRelacionUsuarioTaller = async (id_usuario, id_taller, estadoabierto = 'abierto', estadofinal = 'nofinalizado') => {
    const [relacion, created] = await UsuarioTaller.findOrCreate({
        where: { id_usuario, id_taller },
        defaults: {
            id_usuario,
            id_taller,
            estadoabierto,
            estadofinal
        }
    });
    
    if (!created) {
        // Si ya existía, actualizamos el estado
        await relacion.update({ estadoabierto, estadofinal });
    }
    
    return relacion;
};

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
    createRelacionUsuarioTaller,
    changeEstadoTallerUsuario
};