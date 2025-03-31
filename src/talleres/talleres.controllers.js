const { Taller } = require('../models/talleres.models');

// Obtener todos los talleres
const findAllTalleres = async () => {
    const data = await Taller.findAll();
    return data;
};

// Obtener taller por ID
const findTallerById = async (id) => {
    const data = await Taller.findOne({
        where: {
            id: id
        }
    });
    return data;
};

// Crear nuevo taller
const createTaller = async (obj) => {
    const data = await Taller.create({
        nombre_taller: obj.nombre_taller
    });
    return data;
};

// Actualizar taller
const updateTaller = async (id, obj) => {
    const data = await Taller.update(obj, {
        where: {
            id: id
        }
    });
    return data[0]; // Retorna 1 si se actualizó, 0 si no
};

// Eliminar taller
const deleteTaller = async (id) => {
    const data = await Taller.destroy({
        where: {
            id: id
        }
    });
    return data; // Retorna 1 si se eliminó, 0 si no
};

module.exports = {
    findAllTalleres,
    findTallerById,
    createTaller,
    updateTaller,
    deleteTaller
};