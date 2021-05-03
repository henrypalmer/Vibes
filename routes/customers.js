const Customer = require('../models/customer')
const express = require('express')
const router = express.Router()
router.use(express.json())


router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('id:')
    if(customers!=null){
        res.send(customers)
    }else
        res.status(404).send('Sorry, cant find that');
})

router.post('/', async(req, res) => {
        
    try{
        let customer = Customer({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            address : req.body.address,
            email : req.body.email,
            phoneNumber : req.body.phoneNumber,
            userName : req.body.userName,
            password : req.body.password
        })
        customer = await customer.save();
        res.redirect('/')
    }catch(ex){
        console.log(ex.message)
    }
})

module.exports = router