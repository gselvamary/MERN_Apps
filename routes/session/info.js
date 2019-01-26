const express = require('express');
const router = express.Router();

// Item Model
const Session = require('../../models/session');

/*
router.post('/', (req, res) => {
    const newSess = new Session({
        sessionid: req.body.sessionid,
        s1: req.body.s1,
        s2: req.body.s2,
        s3: req.body.s3,
        s4: req.body.s4,
        s5: req.body.s5,
        s6: req.body.s6,
        s7: req.body.s7,
        s8: req.body.s8,
        s9: req.body.s9,
        s10: req.body.s10
    });
    newSess.save()
        .then(slist => res.json(slist))
        .catch(err => console.log("Error"));
});
*/


router.patch('/', (req, res) => {
    console.log(req.body);
    Session.findOne({ sessionid: req.body.sessionid })
        .then(session => {
            // this updates only given data
            for (let i in req.body) {
                console.log(req.body[i]);
                session[i] = req.body[i];
            }
            session.save()
                .then(session => {
                    res.json(session)
                })
                .catch(err => console.log("Update Failed"));
        });
});


module.exports = router;

