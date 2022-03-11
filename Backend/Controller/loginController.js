const Register = require('../Model/Register');
var bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {

    res.render('login')
}

exports.postLogin = async (req, res, next) => {
    console.log(req.body);
    const { email,password } = req.body;
    const isEmailExists = await Register.findOne({ email })
    if (!isEmailExists) {
        return res.render('login');
    }
    console.log(isEmailExists);
    bcrypt.compare(password, isEmailExists.password).then((err, result) => {
        if (result === false) {
            return res.render('login');
        }
        req.user = isEmailExists;
        return res.redirect('home');
        
    }).catch(err => console.log(err));
}


exports.getRegister = (req, res, next) => {
    res.render('register')
}

exports.getHome = (req, res, next) => {
    res.render('home')
}



exports.postRegister = async (req, res, next) => {
    const { name, email, organization, password } = req.body;
    const isEmailExists = await Register.findOne({ email })
    if (isEmailExists) {
        return res.render('register');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new Register({ name, email, password, organization });
    const user = await newUser.save();
    if (user) {
        res.redirect('home')
    }
};



exports.getProfile = async (req, res, next) => {
    const user = req.user;
    console.log(user);
    res.render('profile', { name: user?.name, organization: user?.organization, email: user?.email });
}
