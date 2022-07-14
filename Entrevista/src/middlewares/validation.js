const { check, body } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require("../database/models");


module.exports = {

    register: [

        check("name")
            .notEmpty()
            .withMessage("Falta ingresar Nombre")
            .isLength({ min: 2 })
            .withMessage("El nombre debe tener al menos 2 caracteres"),

        check("phone")
            .notEmpty()
            .withMessage("Falta ingresar Teléfono")
            .isLength({ min: 10 })
            .withMessage("El teléfono debe tener al menos 10 digitos"),

            check("date")
            .notEmpty()
            .withMessage("Falta ingresar fecha de nacimiento"),

            check("direction")
            .notEmpty()
            .withMessage("Falta ingresar dirección")
            .isLength({ min: 7 })
            .withMessage("La dirección debe tener al menos 7 caracteres"),
           

        check("email")
            .notEmpty()
            .withMessage("Falta ingresar Email")
            .bail()
            .isEmail()
            .withMessage("Formato de correo incorrecto")
            .bail()
            .custom(function (value) {
                return db.user.findOne({

                    where: {
                        email: value
                    }
                }).then((user) => {
                    if (user) {
                        return Promise.reject("Email ya registrado")
                    }
                })

            }),

      

    ]




}