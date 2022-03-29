var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
    firstname: {
        type: String,
        
    },
    lastname: {
        type:String
        
    },
    username: {
        type: String,
        required: true,
        unique: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    organization: {
        type:String
       
    }
});

var profileData = mongoose.model('profile_datas', profileSchema);
module.exports = profileData;
