const Register = require('../Model/Register');
const Mood = require('../Model/Mood');
const assesment = require('../Data/assesment');
const Moods = require('../Data/moods');
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {

    res.status('200').json({message:'login'});
}

exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const isEmailExists = await Register.findOne({ email });
        console.log(isEmailExists);
        if (!isEmailExists) {
            return  res.status('409').json({error:{message:'Email Not exist',status:409}});
        }
        const result = await bcrypt.compare(password, isEmailExists.password);
        if (!result) {
            return res.status('409').json({error:{message:'Password not match',status:409}});

        }
        req.session.user = isEmailExists;
        req.session.isAuth = true;
        res.status(201).json({ message: 'Login successful',status:201 });
    } catch (err) {
        console.log(err);
        return res.status('500').json({error:{message:'Server error',status:500}});
    }
    
};





exports.postRegister = async (req, res, next) => {
    const { name, email, organization, password } = req.body;
    console.log(req.body);
    const isEmailExists = await Register.findOne({ email })
    if (isEmailExists) {
        return res.status('409').json({error:{message:'Already Registered with this email',status:409}});
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new Register({ name, email, password:hashedPassword, organization });
    const user = await newUser.save();
    if (user) {
        res.status(201).json({ message: 'Registration Completed success',status:201 });
    }
};




exports.postLogout = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.status(200).json({message:'Logut Success',status:200})
    });
};

exports.getRegister = (req, res, next) => {
    res.status('200').json({message:'Register',status:200});
    
}

exports.getHome = (req, res, next) => {
    res.status('200').json({message:'Home',status:200});
    
}
