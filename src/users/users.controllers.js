const Users = require('../models/users.models')

//get all users
const findAllUsers = async() => {
    const data = await Users.findAll()
    return data
}

// get user {id}
const findUserById = async(id) => {
    const user = await Users.findOne({
        where:{
            id:id
        }
    })
    return user
}

// create user
const createUser = async(obj) => {
    const newUser = await Users.create({ //nombre, contraseña, rol
        nombre: obj.nombre,
        contraseña: obj.contraseña,
        rol: obj.rol
    })
    return newUser
}

// update user
const updateUser = async(id,obj) => {
    const data = await Users.update(obj,{
        where:{
            id:id
        }
    })
    return data[0]
}

//delete user
const deleteUser = async(id) => {
    const data = await Users.destroy({
        where:{
            id:id
        }
    })
    return data
}

module.exports={
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}