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

router.patch('/:regno', (req, res) => {
  User.findOne({ regno: req.params.regno })
  .then(res => res.json())
  .then(json => {
    if (json.success) {
      this.setState({
        fname: req.body.fname,
        lname: req.body.lname,
        password: req.body.password,
        dept_id: req.body.dept_id,
        email: req.body.email,
        mobile: req.body.mobile
      });
      user.save();
    }
    else 
      console.log("Update failed");
    })
  .catch(err => console.log("No such user"));
});

//https://www.toptal.com/nodejs/secure-rest-api-in-nodejs

module.exports = router;


/*
componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }
*/

/* update example

router.route('/update')
.post(function(req, res) {
 const doc = {
     description: req.body.description,
     amount: req.body.amount,
     month: req.body.month,
     year: req.body.year
 };

*/

