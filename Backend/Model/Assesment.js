const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Register = require('./Register');

const assesmentSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Register',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Assesment = mongoose.model('Assesment', assesmentSchema);
module.exports = Assesment;
