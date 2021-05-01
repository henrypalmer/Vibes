const mongoose = require('mongoose');
const express = require('express');
//const router = express.Router();

const productSchema = new mongoose.Schema({

    price_data: {
        currency: 'usd',
        product_data: {
            name: "T-shirt",//category
            },
    unit_amount: 2000,
    },
    quantity: 1,
})
const Product = mongoose.model("Product", productSchema);

async function getProduct(){
    const products = await Product
    .find();
    //Here to show other options until production for quick edits
    //.limit(2);
    //.sort({name: 1});
    //.select({ name: 1});
    //.count();
    // console.log(customers); //log for testing
}
module.exports.Product = Product;
module.exports.getProduct = getProduct();