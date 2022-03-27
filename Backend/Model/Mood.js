const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    date_time: {
        type: Date,
        required: true,
        default: Date.now
    },
    mood:{
        type: String,
        required: true
    }

});

const Mood = mongoose.model('moods', moodSchema);
module.exports = Mood;