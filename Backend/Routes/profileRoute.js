const express = require('express');
const routes = express.Router();
const profileController = require('../Controller/profileController');


const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        return res.redirect('/login');
    }
};

// Get Route for Profile Details and moods of LoggedIn User
routes.get('/profile',isAuth,profileController.getProfile);



// Get Router to fetch all the Assesment options to show the current user
routes.get('/assesments', isAuth, profileController.getAssesments);

// Get Router to fetch all the Assesment of current loggedin user
routes.get('/assesments/:userId', isAuth, profileController.getUserAssesments);

// POST Route to insert the assesment Question and Answer
routes.post('/assesment', isAuth,profileController.postAssesment);



// Get Route to fetch all the moods option
routes.get('/moods', isAuth, profileController.getMoods);

// Get Route to fetch modes of specific user with time and date 
routes.get('/moods/:userId', isAuth, profileController.getUserMoods);

// POST Route to insert the Moods of user
routes.post('/mood', isAuth,profileController.postMoods);



// GET Route to fetch the emergency Contacts
routes.get('/emergency', profileController.getEmergencyContacts);

module.exports = routes;