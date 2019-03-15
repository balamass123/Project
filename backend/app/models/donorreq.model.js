const mongoose = require('mongoose');

const DonorreqSchema = mongoose.Schema({
    name: String,
    email: String,
    gender:String,
    age:Number,
    mobileNo:Number,
    bloodgroup:String,
    location:String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Donorreq', DonorreqSchema);