const express = require('express');
const routes = express.Router();
var Assessment = require('../Model/Assessment');
var startOfMonth = require('date-fns/startOfMonth')
var endOfMonth = require('date-fns/endOfMonth')

//GET route to fetch all assessments
routes.get('/api/assessments', (req,res)=>{
    
    Assessment.find().exec().then((assessments)=>{
        res.status(200).json(assessments)
    }).catch((err)=>{
        res.status(500).json(err);
    })
    });

    //GET route to fetch all assessments by current month
    routes.get('/api/assessments/currentMonth', (req,res)=>{
    
        Assessment.find({created_at: {
            $gte: startOfMonth(new Date()),
            $lt: endOfMonth(new Date())
        }}).exec().then((assessments)=>{
            res.status(200).json(assessments)
        }).catch((err)=>{
            res.status(500).json(err);
        })
        });


// Get Router to fetch all the Assesment of current loggedin user at Current Month
routes.get('/api/assessments/:username/:email', (req,res)=>{
    
    Assessment.findOne({created_at: {
        $gte: startOfMonth(new Date()),
        $lt: endOfMonth(new Date())
    }, username: req.params.username, email: req.params.email
    }).exec().then((assessments)=>{
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
        
            questions: req.body.questions,
            answers: req.body.answers,
        username: req.body.username,
        email: req.body.email
    });
    
        await newAssessmentEntry.save((err) =>{
            if(err || req.body.answers.some((answer)=>{
                answer == ""
            })){
                res.status(500).json({message: "Assessment Not Added!"})
        
            }else{
                res.status(201).json(err);
            }
        }); 
    
    
    });
    

module.exports = routes;