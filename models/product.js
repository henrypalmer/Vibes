const Product = require('../models/product')
const mongoose = require('mongoose')

const Product = new mongoose.model("Product", new mongoose.Schema({

    price_data: { currency: Number, }, //USD
    product_data: {name: String, }, //"T-shirt",//category
    unit_amount: { Number: Number, }, // 2000,
    quantity: Number //1,
}));