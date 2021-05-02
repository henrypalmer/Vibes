const Customer = require('../models/customer')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('lastName')
    res.send(customers)
})

router.post('/', async (req, res) => {
    if (error) return res.status(400).send("Whoops")
    
    let customer = new Customer({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        address : req.body.address,
        userName : req.body.userName,
        password : req.body.password    
     })
     customer = await customer.save();
     console.log(customer)
     res.send(customer)
})

exports.router = router