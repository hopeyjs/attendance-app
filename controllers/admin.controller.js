const Activity = require('../model/activity.model');
const Attendance = require('../model/attendance.model');
const User = require('../model/attendance.model');
const Guest = require('../model/guest.model');
const app = require('../routes/routes');

//show admin page
exports.adminPage = (req, res) => {
    return res.status(200).render('admin');
}

//show staff creation form
exports.staffForm = (req, res) => {
    return res.status(200).render('admin');
}

//add a new staff
exports.addStaff= async (req, res) => {
    //check if staff exists
    const user = await User.findOne({staffId:req.body.staffId});
        if(user) {
            return res.status(500).render('addUser', {
                error:'user already exist!', 
            });
        }
        else {
            let newUser = new User({
                staffID: req.body.staffID,
                fullName: req.body.fullName,
                email: req.body.email,
                role: req.body.role,
               });

        //create the new staff record
        User.create(newUser, (err, user)=>{
            if(err){
                return res.render('addUser', {
                    err
                });
            }
            else{
                 res.render('addUser', {
                     user
                    });
                }
            })
        }
    }

//view all staff
exports.allStaff = async (req, res) => {
    const allStaff = await User.find();
    if(allStaff) {
        return res.status(200).render('staffList', {
            allStaff
        })
    } else {
        return res.status(404).render('staffList', {
            error: 'No staff record found.'
        })
    }
}

//show report selector page
exports.reportsPage = (req, res) => {
    return res.status(200).render('reports');
}

//view all guest records
exports.guestReport = async (req, res) => {
    const report = await Guest.find();
    if(report) {
        return res.status(200).render('report', {
            report
        })
    } else {
        return res.status(404).render('report', {
            error: 'No guest report record found.'
        })
    }
}

// view attendance record
exports.getAttendance = async (req, res) => {
    const report = await Attendance.find();
    if(report) {
        return res.status(200).render('report', {
            report
        })
    } else {
        return res.status(404).render('report', {
            error: 'No attendance record found.'
        })
    }
}

//view activity log
exports.getActivityLog = async (req, res) => {
    const report = await Activity.find();
        if(report) {
        return res.status(200).render('report', {
            report
        })
    } else {
        return res.status(404).render('report', {
            error: 'No activity record found.'
        })
    }
}