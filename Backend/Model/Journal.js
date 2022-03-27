const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    date_time: {
        type: Date,
        required: true,
        default:Date.now
    },
    journal:{
        type: String,
        required: true
    },
    videoFormat:{
        type: String
    },
    title: {
        type: String,
        required: true
    }

});

const Journal = mongoose.model('journals', journalSchema);
module.exports = Journal;
