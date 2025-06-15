/**
 * Rutas del módulo de usuario.
 * Todas las rutas están bajo /api/users
 */

const express = require('express');
const router = express.Router();
const userController = require('../controlador/usuario.controlador');

//Crear usuario     
router.post('/users', userController.createUser);
//Obtener todos los usuarios
router.get('/users', userController.getAllUsers);
//Obtener usuario por ID
router.get('/users/:id', userController.getUserById);
//Actualizar usuario por ID
router.put('/users/:id', userController.updateUser);
//Eliminar usuario por ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;