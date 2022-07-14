const app = require("../app");

const mainController = {

    'index': function (req, res) {
        res.render('users/register');
    }

};

module.exports = mainController;