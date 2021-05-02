const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

mongoose.connect("mongodb+srv://ctadmin:vibesdb@vibes.grsee.mongodb.net/VibesCustomers?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
.then( () => console.log('Connected to MongoDB Successfully'))
.catch( () => console.error("Could not connect to MongoDB"))

const Customer = new mongoose.model('Customer', new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    email: { type: String, unique: true, required: true},
    address: { type: String, unique: false, required: true},
    userName: { type: String, unique: true, required: true},
    password: { type: String, required: false},
}));

async function createCustomer(){
    try{
        var customer = new Customer({
            firstName : request.body.firstName,
            lastName : request.body.lastName,
            phoneNumber : request.body.phoneNumber,
            email : request.body.email,
            address : request.body.address,
            userName : request.body.userName,
            password : request.body.password
        });
        const result = await customer.save()
        console.log(result)//testing purposes
        .then( () => console.log('Created New Customer Successfully'))
        .catch( () => console.error("Could not create Customer"))
    }catch(err){
        console.log('Error Connecting or creating user')
    }
};

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('lastName')
    res.send(customers)
})

router.post('/', (req, res) => {
    mongoose.connect("mongodb+srv://ctadmin:vibesdb@vibes.grsee.mongodb.net/VibesCustomers?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch( () => console.error("Could not connect to MongoDB"));
    let customer = new Customer({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        address : req.body.address,
        userName : req.body.userName,
        password : req.body.password    
     })
     customer = customer.save();
     console.log(customer)
     res.send(customer)
})

async function getCustomers(){
    mongoose.connect("mongodb+srv://ctadmin:vibesdb@vibes.grsee.mongodb.net/VibesCustomers?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch( () => console.error("Could not connect to MongoDB"));
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
module.exports = router;
createCustomer();