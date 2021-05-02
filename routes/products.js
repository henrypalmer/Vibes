const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const productSchema = new mongoose.Schema({

    price_data: { currency: Number, }, //USD
    product_data: {name: String, }, //"T-shirt",//category
    unit_amount: { Number: Number, }, // 2000,
    quantity: Number //1,
})
const Product = mongoose.model("Product", productSchema);

async function getProduct(){
    mongoose.connect("mongodb+srv://ctadmin:vibesdb@vibes.grsee.mongodb.net/VibesProducts?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch( () => console.error("Could not connect to MongoDB"));
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