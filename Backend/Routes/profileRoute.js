const express = require('express');
const routes = express.Router();
const profileController = require('../Controller/profileController');
const profileData = require('../Model/profileData')


const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        return res.redirect('/login');
    }
};

// Get Route for Profile Details and moods of LoggedIn User
routes.get('/api/profile/:username',(req,res)=>{
profileData.findOne({username: req.params.username})
});



// Get Router to fetch all the Assesment options to show the current user
routes.get('/api/assesments', isAuth, profileController.getAssesments);

// Get Router to fetch all the Assesment of current loggedin user
routes.get('/api/assesments/:username', isAuth, profileController.getUserAssesments);

// POST Route to insert the assesment Question and Answer
routes.post('/api/assesment', isAuth,profileController.postAssesment);



// Get Route to fetch all the moods option
routes.get('/api/moods', isAuth, profileController.getMoods);

// Get Route to fetch modes of specific user with time and date 
routes.get('/api/moods/:username', isAuth, profileController.getUserMoods);

// POST Route to insert the Moods of user
routes.post('/api/mood', isAuth,profileController.postMoods);



// GET Route to fetch the emergency Contacts
routes.get('/api/emergency', profileController.getEmergencyContacts);

module.exports = routes;