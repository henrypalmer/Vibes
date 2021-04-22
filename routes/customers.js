const mongoose = require('mongoose');
const express = require('express');
//const router = express.Router();

const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    email: { type: String, unique: false, required: true},
    address: { type: String, unique: false, required: true},
    userName: { type: String, unique: false, required: true},
    password: { type: String, required: true},
})
const Customer = mongoose.model("Customer", customerSchema);

async function createCustomer(){
    var customer = new Customer({
        firstName : "request.body.address",
        lastName : "request.body.address",
        phoneNumber : "309309309",
        email : "request.body.address",
        address : "request.body.address",
        userName : 'request.body.userName',
        password : 'request.body.password'
    });
    const result = await customer.save();
};

async function getCustomers(){
    const customers = await Customer
    .find();
    //Here to show other options until production for quick edits
    //.limit(2);
    //.sort({name: 1});
    //.select({ name: 1});
    //.count();
    // console.log(customers); //log for testing
}
module.exports.Customer = Customer;
module.exports.createCustomer = createCustomer();
module.exports.getCustomers = getCustomers();