const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DeptSchema = new Schema({
    dept_id: {
        type: Number,
        required: true
    },
    dept_name: {
        type: String,
        required: true
    },
    dept_sname: {
        type: String,
        required: true
    }
});

module.exports = Dept = mongoose.model('dept', DeptSchema);