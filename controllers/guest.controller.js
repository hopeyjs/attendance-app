const Guest = require('../model/guest.model')

exports.guestForm = (req, res) => {
    return res.status(200).render('guestForm', {message:''})
}

exports.submitGuestForm = (req, res) => {
    let { fname, phone, email, address, purpose, whom } = req.body;
    
    const guest = {
        fname,
        phone,
        email,
        address,
        purpose,
        whom
    }
Guest.create(guest, (err, guest) => {
    if(err) {
        console.log(err)
        return res.status(500).render('guestForm', {
            status: 'FAILURE',
            message: err
        })
    } else {
        return res.status(200).render('guestForm', {
            status: 'SUCCESS',
            message: 'Guest Details Logged Successfully'
            })
        }
    })
}