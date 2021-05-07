const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    email: {type: String, required: true, minlength: 5, maxlength: 50},
    password: {type: String, required: true, minlength: 8, maxlength: 200},
    admin: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now }
});

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
