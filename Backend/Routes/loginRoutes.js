const express = require('express');
const routes = express.Router();
const loginController = require('../Controller/loginController');

// Authorization Middelware
const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        return res.redirect('/login');
    }
};

// Default
routes.get('/', (req, res, next) => {
    res.redirect('/login');
});

// GET ROUTE for LOGIN. If you want to render node template page
routes.get('/login', loginController.getLogin);

// POST ROUTE for LOGIN:  
routes.post('/login', loginController.postLogin);

// GET ROUTE for Register. If you want to render HTML PAGE
routes.get('/register', loginController.getRegister);

// POST ROUTE for Register:  
routes.post('/register', loginController.postRegister);

// GET ROUTE for HOME -> optional
routes.get('/home',isAuth, loginController.getHome);

// POST pouter for logout
routes.get('/logout',isAuth, loginController.postLogout);
routes.post('/logout',isAuth, loginController.postLogout);



module.exports = routes;
