const express = require('express');
const router = express.Router();

// Dept Model
const Dept = require('../../models/dept');

router.get('/', (req, res) => {
    Dept.find()
        .sort({ dept_id: 1 })
        .then(depts => res.json(depts));
});


router.post('/', (req, res) => {
    const newDept = new Dept({
        dept_id: req.body.dept_id,
        dept_name: req.body.dept_name,
        dept_sname: req.body.dept_sname
    });
    newDept.save()
        .then(dept => res.json(dept))
        .catch(err => console.log("Error"));
});


router.delete('/:dept_id', (req, res) => {
    Dept.findOne({ dept_id: req.params.dept_id })
        .then(dept => dept.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

