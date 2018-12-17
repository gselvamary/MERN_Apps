const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/user');

router.get('/', (req, res) => {
  User.find()
    .sort({ regno: 1 })
    .then(users => res.json(users));
});


router.post('/', (req, res) => {
  const newUser = new User({
    regno: req.body.regno,
    fname: req.body.fname,
    lname: req.body.lname,
    password: req.body.password,
    dept_id: req.body.dept_id,
    email: req.body.email,
    mobile: req.body.mobile
  });
  newUser.save()
    .then(user => res.json(user))
    .catch(err => console.log("Error"));
});


router.delete('/:regno', (req, res) => {
  console.log(req.params.regno);
  User.findOne({ regno: req.params.regno })
    .then(user => user.remove()
      .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});


router.get('/:regno', (req, res) => {
  User.findOne({ regno: req.params.regno })
    .then(user => {
      res.json(user)
    })
    .catch(err => console.log("No such user"));
});




//update

/*this to verify which value do we get in user and in req... put it in before for loop
// console.log(req.params.regno);
// console.log(req.body.fname);
 // console.log(user.fname); */

/* this code expects every data   place it instead of for loop
user.fname = req.body.fname;
  user.lname = req.body.lname;
user.password = req.body.password;
user.dept_id = req.body.dept_id;
user.email = req.body.email;
user.mobile = req.body.mobile;  */
// Reference :  https://www.toptal.com/nodejs/secure-rest-api-in-nodejs

router.patch('/:regno', (req, res) => {
  User.findOne({ regno: req.params.regno })
    .then(user => {
      // this updates only given data
      for (let i in req.body) {
        user[i] = req.body[i];
      }
      user.save()
        .then(user => {
          res.json(user)
        })
        .catch(err => console.log("Update Failed"));
    });
});

module.exports = router;
