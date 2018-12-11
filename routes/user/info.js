const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/user');

router.get('/', (req, res) => {
  User.find()
    .sort({ regno: -1 })
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


router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove()
      .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

