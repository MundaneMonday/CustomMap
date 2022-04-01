const express = require('express');
const routes = express.Router();
var Assessment = require('../Model/Assessment');


// Get Router to fetch all the Assesment of current loggedin user
routes.get('/api/assessments/:username', (req,res)=>{
    Assessment.find({username: req.params.username}).exec().then((assessments)=>{
        res.status(200).json(assessments)
    }).catch((err)=>{
        res.status(500).json(err);
    })
    });

    // GET Route to fetch Assessment by Id

    routes.get('/api/assessments/:id', (req,res)=>{
        Assessment.find({_id: req.params.id}).exec().then((assessment)=>{
            res.status(200).json(assessment)
        }).catch((err)=>{
            res.status(500).json(err);
        })
        });

// POST Route to insert the assesment Question and Answer
routes.post('/api/assessments', async (req,res)=>{
    const newAssessmentEntry = new Assessment({
        answers: req.body.answers,
        username: req.body.username
    });
    await newAssessmentEntry.save((err) =>{
        if(err){
            res.status(500).json({message: "Assessment Not Added!"})
    
        }else{
            res.status(201).json(err);
        }
    });  
    });
    

module.exports = routes;