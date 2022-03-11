const express = require('express');
const routes = express.Router();
const loginController = require('../Controller/loginController');

routes.get('/', (req, res, next) => {
    res.redirect('/login');
});

routes.get('/login', loginController.getLogin);

routes.post('/login', loginController.postLogin);

routes.get('/register', loginController.getRegister);

routes.post('/register', loginController.postRegister);

routes.get('/home', loginController.getHome);

routes.get('/profile', loginController.getProfile);



module.exports = routes;
