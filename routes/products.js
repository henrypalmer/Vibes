const Product = require('../models/product')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const product = await Product.find().sort('product_data')
    res.send(product)
})

router.post('/', async (req, res) => {
    if (error) return res.status(400).send("Whoops")
    
    let product = new Product({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        address : req.body.address,
        userName : req.body.userName,
        password : req.body.password    
     })
     product = await product.save();
     console.log(product)
     res.send(product)
})

exports.router = router