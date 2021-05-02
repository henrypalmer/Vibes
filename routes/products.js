const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Product = new mongoose.model("Product", new mongoose.Schema({

    price_data: { currency: Number, }, //USD
    product_data: {name: String, }, //"T-shirt",//category
    unit_amount: { Number: Number, }, // 2000,
    quantity: Number //1,
}));

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

module.exports.Product = Product;