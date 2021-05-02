const mongoose = require('mongoose')

const Customer = new mongoose.model('Customer', new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    email: { type: String, unique: true, required: true},
    address: { type: String, unique: false, required: true},
    userName: { type: String, unique: true, required: true},
    password: { type: String, required: false},
}));

exports.Customer = Customer;




