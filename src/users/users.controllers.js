const Users = require('../models/users.models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

//get all users
const findAllUsers = async() => {
    const data = await Users.findAll()
    return data
}

// get user {id}
const findUserById = async(id) => {
    const user = await Users.findOne({
        where: {
            id: id
        }
    })
    return user
}

// create user
const createUser = async(obj) => {
    const hashedPassword = await bcrypt.hash(obj.contraseña, 10)
    const newUser = await Users.create({
        id: uuid.v4(),
        nombre: obj.nombre,
        contraseña: hashedPassword,
        rol: obj.rol
    })
    return newUser
}

// update user
const updateUser = async(id, obj) => {
    if(obj.contraseña){
        obj.contraseña = await bcrypt.hash(obj.contraseña, 10)
    }
    const data = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

//delete user
const deleteUser = async(id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}