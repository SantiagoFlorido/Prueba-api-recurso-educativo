const usuariosTalleresController = require('./usuarios_talleres.controllers');

const createUsuarioTaller = (req, res) => {
    const { id_usuario, id_taller, estadoabierto, estadofinal } = req.body;

    usuariosTalleresController.createRelacionUsuarioTaller(id_usuario, id_taller, estadoabierto, estadofinal)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const updateEstadoTallerUsuario = (req, res) => {
    const { id_usuario_taller } = req.params;
    const { estadoabierto,estadofinal } = req.body;

    usuariosTalleresController.changeEstadoTallerUsuario(id_usuario_taller, estadoabierto, estadofinal)
        .then((data) => {
            if (data) {
                res.status(200).json({ message: `Estado actualizado a: ${estadoabierto, estadofinal}` });
            } else {
                res.status(404).json({ message: 'Registro no encontrado' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};


module.exports = {
    createUsuarioTaller,
    updateEstadoTallerUsuario
};