const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Register = require('./profileData');

const moodSchema = new Schema({
    currentMood: {
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

const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;
