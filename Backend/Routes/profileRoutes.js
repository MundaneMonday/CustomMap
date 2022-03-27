const express = require('express');
const routes = express.Router();
const profileData = require('../Model/profileData')




// Get Route for Profile Details 
routes.get('/api/profiles/:username',(req,res)=>{
profileData.findOne({username: req.params.username}).exec().then((user)=>{
    res.status(200).json(user)
}).catch((err)=>{
    res.status(500).json(err);
});
});





/*// Get Router to fetch all the Assesment options to show the current user
routes.get('/api/assesments',async (req,res)=>{
    const { userId } = req.params;
    try {
        const assesmentDetails = await Assesment.find({ userId});
        res.status(200).json({ data: assesmentDetails, staus: 200 });
        
    } catch (err) {
        throw err
    }  
});*/





/*// Get Route to fetch all the moods option
routes.get('/api/moods', isAuth, profileController.getMoods);*/





// GET Route to fetch the emergency Contacts
//routes.get('/api/emergency', profileController.getEmergencyContacts);

module.exports = routes;