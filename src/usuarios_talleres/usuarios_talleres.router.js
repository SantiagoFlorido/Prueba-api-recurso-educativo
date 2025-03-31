const router = require('express').Router();
const usuariosTalleresServices = require('./usuarios_talleres.services');

// Ruta para cambiar el estado de un taller para un usuario específico
router.patch('/:id_usuario_taller/estado', usuariosTalleresServices.updateEstadoTallerUsuario);

module.exports = router;