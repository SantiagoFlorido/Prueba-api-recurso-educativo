const talleresController = require('./talleres.controllers');

// Obtener todos los talleres
const getAllTalleres = (req, res) => {
    talleresController.findAllTalleres()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

// Obtener taller por ID
const getTallerById = (req, res) => {
    const id = req.params.id;
    talleresController.findTallerById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: 'Taller no encontrado, ID inválido' });
            }
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
};

// Crear nuevo taller
const postTaller = (req, res) => {
    const { nombre_taller } = req.body;
    talleresController.createTaller({ nombre_taller })
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ 
                message: err.message,
                fields: {
                    nombre_taller: 'string (requerido)'
                }
            });
        });
};

// Actualizar taller
const patchTaller = (req, res) => {
    const id = req.params.id;
    const { nombre_taller } = req.body;
    talleresController.updateTaller(id, { nombre_taller })
        .then((data) => {
            if (data) {
                res.status(200).json({ message: 'Taller actualizado exitosamente' });
            } else {
                res.status(404).json({ message: 'Taller no encontrado, ID inválido' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

// Eliminar taller
const deleteTaller = (req, res) => {
    const id = req.params.id;
    talleresController.deleteTaller(id)
        .then((data) => {
            if (data) {
                res.status(200).json({ message: 'Taller eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Taller no encontrado, ID inválido' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

module.exports = {
    getAllTalleres,
    getTallerById,
    postTaller,
    patchTaller,
    deleteTaller
};