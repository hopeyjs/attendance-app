const mongoose = require('mongoose');

let activitySchema = new mongoose.Schema({
    staffId: {
        type: String,
        required: true
    },
    activityType: {
        type: String
    },
    timestamp: {
        type: Date
    }
})
module.exports = mongoose.model('Activity', activitySchema);
