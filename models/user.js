const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  regno: {
    type: Number,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dept_id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  }
  
});

module.exports = User = mongoose.model('user', UserSchema);