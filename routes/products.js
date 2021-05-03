const Product = require('../models/product')
const express = require('express');
const router = express.Router();
router.use(express.json())

router.get('/', async (req, res) => {
    const product = await Product.find().sort('product_data')
    res.send(product)
})

router.post('/', async (req, res) => {
    try{        
        let product = new Product({
            price_data : req.body.price_data,
            product_data : req.body.product_data,
            unit_amount : req.body.unit_amount
        })
        product = await product.save();
        console.log(product)
        res.send(product)
    }catch(ex){
            console.log(ex.message)
    }
})

module.exports = router