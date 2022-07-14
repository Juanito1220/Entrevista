const app = require("../app");
const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");


const usersControllers = {

  'register': function (req, res) {
    res.render('users/register');
  },


  'users': function (req, res) {
    let promUser = db.user.findAll()
   
 
    Promise
      .all([promUser])
      .then(([allUsers]) => {
        return res.render('users/users', { allUsers })
      })
      .catch(error => res.send(error))
  },


  'create': function (req, res) {

    const errors = validationResult(req)

    if (errors.errors.length > 0) {
      return res.render("users/register", { errors: errors.mapped() })

    }

    db.user.create({

      name: req.body.name,
      phone: req.body.phone,
      date:req.body.date,
      direction:req.body.direction,
      email: req.body.email,
      image: req.file ? req.file.filename : "default.png",

    })

      .then(() => {
        return res.redirect('/users')
      })
      .catch(error => res.send(error))
  },

  'userDetail': function (req, res) {
    let users = db.user.findByPk(req.params.id)
    Promise.all([users])
      .then(function ([users]) {
        res.render('users/userDetail', { users: users });
      });

  },


  'edit': function (req, res) {
    let userId = req.params.id
    let promUsers = db.user.findByPk(userId);

    Promise
      .all([promUsers])
      .then(([User]) => {

        return res.render(path.resolve(__dirname, '..', 'views', 'users', 'usersEdit'), { User })
      })
      .catch(error => res.send(error))
  },

  'update': function (req, res) {
    let userId = req.params.id
    db.user.update({
      name: req.body.name,
      phone: req.body.phone,
      date:req.body.date,
      direction:req.body.direction,
      email: req.body.email,
      image: req.file ? req.file.filename : "default.png",

    },
      {
        where: { user_id: userId }
      })

      .then(() => {
        return res.redirect('/users')
      })
      .catch(error => res.send(error))
  },

  eliminar: (req, res) => {
    let userId = req.params.id
    db.user.destroy({ where: { user_id: userId }, force: true })
      .then(() => {
        return res.redirect('/users')
      })
      .catch(error => res.send(error))
  }
};

module.exports = usersControllers;