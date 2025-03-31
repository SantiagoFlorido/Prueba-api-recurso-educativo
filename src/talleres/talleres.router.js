const router = require('express').Router();
const talleresServices = require('./talleres.services');

// Rutas básicas CRUD
router.route('/')
    .get(talleresServices.getAllTalleres)    // Obtener todos los talleres
    .post(talleresServices.postTaller);      // Crear un nuevo taller

router.route('/:id')
    .get(talleresServices.getTallerById)     // Obtener un taller por ID
    .patch(talleresServices.patchTaller)     // Actualizar un taller
    .delete(talleresServices.deleteTaller);  // Eliminar un taller

module.exports = router;