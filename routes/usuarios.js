const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator')
// crear usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),  
        check('email', 'El email es obligatorio').isEmail(),  
        check('password', 'El password debe tener mínimo 6 caracteres').isLength({min: 6}),  
    ],
    usuarioController.nuevoUsuario
)

module.exports = router; 