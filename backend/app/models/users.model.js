const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: String,
    email: String,
    gender:String,
    age:Number,
    mobileNo:Number,
    password:String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UsersSchema);