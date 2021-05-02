const express = require('express')
const router = express.Router

const createCustomer = app.post('./routes/Customer', (req, res) => {
    res.render('./views/signup');
})
const login = app.get('./routes/Customer', (req, res) => {
    res.render('./views/login')
})
//const signInRoute = app.get(


module.exports = router