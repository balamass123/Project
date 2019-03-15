const mongoose = require('mongoose');

const BloodreqSchema = mongoose.Schema({
    name: String,
    email: String,
    gender:String,
    age:Number,
    mobileNo:Number,
    bloodgroup:String,
    location:String,
    date:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Bloodreq', BloodreqSchema);