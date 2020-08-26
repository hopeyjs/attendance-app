const mongoose = require('mongoose');

let attendanceSchema = new mongoose.Schema({
staffId: {
    type: String,
    required: true
},
type: {
    type: String
},
clock_in: {
    type: Date
},
clock_out: {
    type: Date
}
})

module.exports = mongoose.model('Attendance', attendanceSchema);