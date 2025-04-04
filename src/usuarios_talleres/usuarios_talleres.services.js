const usuariosTalleresController = require('./usuarios_talleres.controllers');

const updateEstadoTallerUsuario = (req, res) => {
    const { id_usuario_taller } = req.params;
    const { estado } = req.body;

    usuariosTalleresController.changeEstadoTallerUsuario(id_usuario_taller, estado)
        .then((data) => {
            if (data) {
                res.status(200).json({ message: `Estado actualizado a: ${estado}` });
            } else {
                res.status(404).json({ message: 'Registro no encontrado' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

module.exports = {
    updateEstadoTallerUsuario
};