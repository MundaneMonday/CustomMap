const express = require('express');
const routes = express.Router();
var Mood = require('../Model/Mood')
var startOfMonth = require('date-fns/startOfMonth')
var endOfMonth = require('date-fns/endOfMonth')
//Get Route to fetch all moods at the current month
routes.get('/api/moods', (req,res)=>{
    
    Mood.find({created_at: {
        $gte: startOfMonth(new Date()),
        $lt: endOfMonth(new Date())
    }}).exec().then((mood)=>{
        res.status(200).json(mood)
    }).catch((err)=>{
        res.status(500).json(err);
    })
    });

// Get Route to fetch modes of specific user with time and date 
routes.get('/api/moods/:username:email',(req,res)=>{
Mood.find({username: req.params.username, email: req.params.email}).exec().then((moods)=>{
    res.status(200).json(moods)
}).catch((err)=>{
    res.status(500).json(err);
})
});

// POST Route to insert the Moods of user
routes.post('/api/moods', async (req,res)=>{
const newMoodEntry = new Mood({
    username: req.body.username,
    mood: req.body.mood,
    date_time: req.body.date_time
}
);
await newMoodEntry.save((err) =>{
    if(err){
        res.status(500).json(err);
       

    }else{
        res.status(201).json({message: "Mood Entry Added!"})
    }
});  
});

module.exports = routes