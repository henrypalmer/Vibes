const mongoose = require('mongoose')

const Customer = new mongoose.model('Customer', new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phoneNumber: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    address: { type: String, required: true},
    userName: { type: String, required: true, unique: true},
    password: { type: String, required: true},
}));

module.exports = Customer;