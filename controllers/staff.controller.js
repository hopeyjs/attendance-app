const Attendance = require('../model/attendance.model');
const Activity = require('../model/activity.model');
const moment = require('moment');

//staff decision page
exports.staffPage = (req, res) => {
    return res.status(200).render('staffPage');
}

//staff clock in form
exports.clockInForm = (req, res) => {
    return res.status(200).render('clockIn', { error: '', time: ''});
}

//staff clock out form
exports.clockOutForm = (req, res) => {
    return res.status(200).render('clockOut', { error: '', time: ''});
}

//clock staff in
exports.staffClockIn = (req, res) => {
    let attendance = {
        staffId: req.body.staffId,
        type: 'CLOCK IN'
    }

    Attendance.create(attendance, (err, attendance) => {
        if(err) {
            console.log(err)
            return res.status(500).render('clockIn', {
                error: 'clock in failed', time: ''
            })
        } else {
            return res.status(200).render('clockIn', {
                error: '',
                time: moment(attendance.clock_in).format("dddd, MMMM Do YYYY, h:mm a")
                })
            }
        })
    }

//clock staff out
exports.staffClockOut = (req, res) => {
    let attendance = {
        staffId: req.body.staffId,
        clock_out: Date.now(),
        type: 'CLOCK OUT'
    }

    Attendance.create(attendance, (err, attendance) => {
        if(err) {
            return res.status(500).render('clockOut', {
                error: 'clock out failed', time: ''
            })
        } else {
            return res.status(200).render('clockOut', {
                error: '',
                time: moment(attendance.clock_out).format("dddd, MMMM Do YYYY, h:mm a")
                })
            }
        })
    }

//staff activity page
exports.staffActivity = (req, res) => {
    return res.status(200).render('activity')
}

//perform an activity
exports.activity = (req, res) => {
    let activity = {
        staffId: req.body.staffId,
        activityType: req.body.activityType,
        timestamp: Date.now()
    }
    console.log(activity)

    Activity.create(activity, (err, activity) => {
        if(err) {
            console.log(err)
            return res.status(500).render('activity', {
                err
            })
        } else {
            console.log(activity)
            return res.status(200).render('activity', {
                message: 'Your activity has been logged'
            })
        }
    })
}