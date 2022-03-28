var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assessmentSchema = new Schema({
    answers: [{
        answer: String
        
    }],
    username: {
        type: String,
        required: true,
        unique: true
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

var Assessment = mongoose.model('assessments', assessmentSchema);
module.exports = Assessment;
