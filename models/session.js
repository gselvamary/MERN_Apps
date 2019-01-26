const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SessionSchema = new Schema({
    sessionid:Number,
    s1: String,
    s2: String,
    s3: String,
    s4: String,
    s5: String,
    s6: String,
    s7: String,
    s8: String,
    s9: String,
    s10: String
});
module.exports = Session = mongoose.model('session', SessionSchema);