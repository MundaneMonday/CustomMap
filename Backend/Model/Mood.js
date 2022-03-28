var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moodSchema = new Schema({

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

var Mood = mongoose.model('moods', moodSchema);
module.exports = Mood;