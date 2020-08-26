const guestController = require('../controllers/guest.controller');
const authController = require('../controllers/auth.controller.js');
const staffController = require('../controllers/staff.controller');
const adminController = require('../controllers/admin.controller');

const express = require('express');
const app = express();

//index route
app.get('/', authController.homePage);

//guest routes
app.get('/guest', guestController.guestForm);
app.post('/guest', guestController.submitGuestForm);

//staff routes
app.get('/staff', staffController.staffPage);
app.get('/staff/clock-in', staffController.clockInForm);
app.post('/staff/clock-in', staffController.staffClockIn);
app.get('/staff/clock-out', staffController.clockOutForm);
app.post('/staff/clock-out', staffController.staffClockOut);
app.get('/staff/activity', staffController.staffActivity);
app.post('/staff/activity', staffController.activity);

//admin routes
app.get('/admin', adminController.adminPage);
app.get('/stafflist', adminController.allStaff);
app.post('/staff', adminController.addStaff);
app.get('/reports', adminController.reportsPage);
app.get('/activityreport', adminController.getActivityLog);
app.get('/attendancereport', adminController.getAttendance);
app.get('/guestreport', adminController.guestReport);

module.exports = app