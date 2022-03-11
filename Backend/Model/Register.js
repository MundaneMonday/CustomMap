const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    
});

const Register = mongoose.model('Register', registerSchema);
module.exports = Register;
