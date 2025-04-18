const router = require('express').Router()

const userservices = require('./users.services')


router.route('/')
    .get(userservices.getAllUsers)   //trae todos los usuraios
    .post(userservices.postUser)     //crea un o muchos usuario

router.route('/:id')
    .get(userservices.getUserById)   //trae un usuario
    .patch(userservices.patchUser)   //actualiza un usuario
    .delete(userservices.deleteUser)  //elimina un usuario

router.post('/verify', userservices.verifyUserPassword); //valida la contraseña

module.exports = router