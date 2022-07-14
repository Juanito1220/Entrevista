var express = require('express');
var router = express.Router();
const multer = require("../middlewares/multerUsers");
const usersControllers = require('../Controllers/usersControllers');
const validator = require("../middlewares/validation");

//Lista de usuarios
router.get('/', usersControllers.users);

//Creación de usuarios
router.get('/register', usersControllers.register);
router.post('/register', multer(), validator.register, usersControllers.create);

// Detalle usuario
router.get('/detail/:id', usersControllers.userDetail);

//Editar un usuario

router.get('/edit/:id', usersControllers.edit);
router.patch('/edit/:id', multer(), validator.register, usersControllers.update);

//Borrar un usuario

router.delete('/delete/:id', usersControllers.eliminar);


module.exports = router;