const Register = require('../Model/profileData');
const Mood = require('../Model/Mood');
const assesment = require('../Data/assesment');
const emergencyContacts = require('../Data/emergencyContacts');
const Moods = require('../Data/moods');
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Assesment = require('../Model/Assesment');


exports.getProfile = async (req, res, next) => {
    const user = req.session.user;
    console.log(user);
    const moodDetails = await Mood.findOne({ userId: mongoose.Types.ObjectId(user._id) });
    res.status(200).json({ userProfile: { name: user?.name, organization: user?.organization, email: user?.email },moodDetails,status:200 });

}

exports.getMoods = async (req, res, next) => {
    res.status(200).json({ data: moods, staus: 200 });
};

exports.getUserMoods = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const moodDetails = await Mood.find({ userId});
        res.status(200).json({ data: moodDetails, staus: 200 });
        
    } catch (err) {
        throw err
    }
};


exports.postMoods = async (req, res, next) => {
    const { mood } = req.body;
    const { userId } = req.params;

    try {
        const isUserIdExist = await Register.findOne({ _id: userId });
        if (!isUserIdExist) {
            return res.status(403).json({error:{message:'user id not exist',staus:403}});
        }
        let newMood = new Mood({ currentMood: mood, userId: userId });
        newMood = await newMood.save();
        res.status(201).json({ mood: { ...newMood._doc, _id: newMood._id }, status: 201 });
    } catch (err) {
        throw err;
    }
};


exports.getAssesments = async(req,res,next) => {
    res.status(200).json({ data: assesment, staus: 200 });
}

exports.getUserAssesments = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const assesmentDetails = await Assesment.find({ userId});
        res.status(200).json({ data: assesmentDetails, staus: 200 });
        
    } catch (err) {
        throw err
    }
};

exports.postAssesment = async (req, res, next) => {
    const { question, answer, userId } = req.body;
    try {
        let newAssesment = new Assesment({ question, answer, userId });
        newAssesment = await newAssesment.save();
        return res.status(201).json({ status: 201, data: { ...newAssesment._doc, _id: newAssesment._id } });
    } catch (err) {
        throw err;
    }
}

exports.getEmergencyContacts = (req,res,next) => {
    try {
        return res.status(200).json({emergencyContacts,status:200})
    } catch (err) {
        throw err;
    }
}