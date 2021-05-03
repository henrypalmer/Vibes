const mongoose = require('mongoose')

const Product = new mongoose.model("Product", new mongoose.Schema({

    price_data: { currency: Number, }, 
    product_data: {name: String, }, 
    unit_amount: { Number: Number, }, 
}));

module.exports.Product = Product;