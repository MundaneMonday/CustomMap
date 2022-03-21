const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstname: {
        type: String
       
    },
    lastname: {
        type: String
       
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String
        
    },
    organization: {
        type: String
        
    },
    
});

const profileData = mongoose.model('profile_data', profileSchema);
module.exports = profileData;
