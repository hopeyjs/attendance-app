const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    staffID: {
        type:String,
        unique:true, 
        required:true
    },
    fullName: {
        type:String,
        unique:false,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    role: {
        type:String,
        required:true
    },
    password: {
        type:String,
        unique:false,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema);