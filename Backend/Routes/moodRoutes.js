const express = require('express');
const routes = express.Router();
var Mood = require('../Model/Mood')

// Get Route to fetch modes of specific user with time and date 
routes.get('/api/moods/:username',(req,res)=>{
Mood.find({username: req.params.username}).exec().then((moods)=>{
    res.status(200).json(moods)
}).catch((err)=>{
    res.status(500).json(err);
})
});

// POST Route to insert the Moods of user
routes.post('/api/moods', async (req,res)=>{
const newMoodEntry = new Mood(req.body);
await newMoodEntry.save((err) =>{
    if(err){
        res.status(201).json({message: "Mood Entry Added!"})

    }else{
        res.status(500).json(err);
    }
});  
});

module.exports = routes