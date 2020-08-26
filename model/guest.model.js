const mongoose = require('mongoose');

let guestSchema = new mongoose.Schema({
fname: {
    type:String, 
    unique:false, 
    required:true
},
phone: {
    type:String, 
    unique:false, 
    required:true},
email: {
    type:String, 
    unique:false, 
    required:false
},
address: {
    type:String, 
    unique:false,
     required:false
    },
purpose: {
    type: String,
     required: true
    },
whom: {
    type: String,
    required: true
},
date: {
    type: Date,
    default:Date.now()
}
})

module.exports = mongoose.model('Guest', guestSchema);