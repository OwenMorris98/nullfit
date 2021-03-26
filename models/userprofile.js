const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    height:{
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }

})
const userProfile = mongoose.model('UserProfile', userProfileSchema);
module.exports = userProfle