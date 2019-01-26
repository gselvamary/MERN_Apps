const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// User Model
const User = require('../../models/user');

router.get('/', (req, res) => {
  User.find()
    .sort({ regno: 1 })
    .then(users => res.json(users));
});


router.post('/', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ regno: req.body.regno }).then(user => {
    if (user) {
      return res.status(400).json({ regno: "regno already exists" });
    }
    const newUser = new User({
      regno: req.body.regno,
      fname: req.body.fname,
      lname: req.body.lname,
      password: req.body.password,
      password1: req.body.password1,
      dept_id: req.body.dept_id,
      email: req.body.email,
      mobile: req.body.mobile
    });
    console.log(newUser);
    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
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


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const regno = req.body.regno;
  const password = req.body.password;
  // Find user by regno
  User.findOne({ regno }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ regnonotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          fname: user.fname,
          lname: user.lname
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
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

router.patch('/', (req, res) => {
  console.log(req.body);
  User.findOne({ regno: req.body.regno })
    .then(user => {
      // this updates only given data
      for (let i in req.body) {
        console.log(req.body[i]);
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
