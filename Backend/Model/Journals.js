const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Register = require('./Register');

const journalsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content:{
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

const Journals = mongoose.model('Journals', journalsSchema);
module.exports = Journals;
