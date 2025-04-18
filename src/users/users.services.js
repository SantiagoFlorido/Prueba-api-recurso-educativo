const userController = require('./users.controllers')

//get all users
const getAllUsers = (req,res) => {
    userController.findAllUsers()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}

// get user {id}
const getUserById = (req,res) => {
    const id = req.params.id
    userController.findUserById(id)
    .then((data)=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message: 'invalid ID'})
        }
    })
    .catch((err)=>{
        res.status(404).json({message: err.message})
    })
}

//create new user 
const postUser = (req,res) => {
    const {nombre, contraseña, rol} = req.body
    userController.createUser({nombre, contraseña, rol })
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((err)=>{
            res.status(400).json({message: err.message, fields: {
                nombre: 'string',
                contraseña: 'string',
                rol: 'string'
            }})
        })
}

//update user
const patchUser = (req,res) => {
    const id = req.params.id
    const {nombre, contraseña, rol} = req.body
    userController.updateUser(id, {nombre, contraseña, rol})
        .then((data)=>{
            if(data){
                res.status(200).json({message: 'User Modified Succesfuly'})
            }else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}

//delete user
const deleteUser = (req,res) => {
    const  id  = req.params.id
    userController.deleteUser(id)
        .then((data)=>{
            if(data){
                res.status(200).json({message: 'User is delete'})
            }else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}

//verificar contraseña
const verifyUserPassword = async (req, res) => {
    const { id, password } = req.body;
    
    try {
      const result = await userController.verifyPassword(id, password);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
    verifyUserPassword
}
