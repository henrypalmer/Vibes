const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Customer = require('./models/customer')
const customers = require('./routes/customers')
const Product = require('./models/product')
const products = require('./routes/products')
const stripe = require('stripe')('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')
const app = express()

mongoose.connect("mongodb+srv://ctadmin:vibesdb@vibes.grsee.mongodb.net/Vibes?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
.then( () => console.log('Connected to MongoDB Successfully'))
.catch( () => console.error("Could not connect to MongoDB"))  

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/routes/customers', customers)
app.use('/routes/products', products)

  

 function Item(name, unit_amount, quantity) {
    this.price_data = {}
    this.price_data.currency = 'usd'
    this.price_data.product_data = {}
    this.price_data.product_data.name = name
    this.price_data.unit_amount = unit_amount
    this.quantity = quantity
  }

const line_items = []


app.get('/', function(req, res) {
    res.render("home")
})

app.get("/about", function(req, res) {
  res.render("about")
})

app.get("/contact", function(req, res) {
  res.render("contact")
})

app.get("/products", function(req, res) {
  res.render("products")
})

app.get("/cart", function(req, res) {
  res.render("cart", {cart: line_items})
  for (Item of line_items) {
    console.log(Item);
  }

})

app.get("/signup", function(req, res){
  res.render("signup")
})

app.get("/login", function(req, res){ 
  res.render("login")
})

app.post('./routes/customers', async (req, res) => {
  if (error) return res.status(400).send("Whoops")
  try{
    let customer = new Customer({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        address : req.body.address,
        userName : req.body.userName,
        password : req.body.password    
    })
    customer = await customer.save();
    console.log(customer)
    res.send(customer)
  }catch(error){
      console.log(error)
  }
})

app.get("/backBlack", (req, res) => res.render('backBLACK.ejs'))

app.get("/backMAROON", (req, res) => res.render('backMAROON.ejs'))

app.get("/bear", (req, res) => res.render('bear.ejs'))

app.get("/maroonIDKMAN", (req, res) => res.render('maroonIDKMAN.ejs'))

app.get("/lightpinkIDKMAN", (req, res) => res.render('lightpinkIDKMAN.ejs'))

app.get("/breakableheart", (req, res) => res.render('breakableheart.ejs'))

app.get("/sugarcookies", (req, res) => res.render('sugarcookies.ejs'))

app.get("/mug", (req, res) => res.render('mug.ejs'))

app.get("/success", function(req, res) {
  res.render("success")
})

app.get("/cancel", function(req, res) {
  res.render("cancel")
})


app.post('/cart', function(req,res) {
  let name = String(req.body.productName);
  let unit_amount = Number(req.body.price) * 100;
  let quantity = Number(req.body.qnty);
  let newItem = new Item(name, unit_amount, quantity);
  line_items.push(newItem);
  res.redirect("/cart");
})


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1IiobFDfhazcEVWk1pYnrxcs'],
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    line_items,
    mode: 'payment',
    success_url: 'https://shopvibes.azurewebsites.net/success',
    cancel_url: 'https://shopvibes.azurewebsites.net/cancel',
  })

  res.json({id: session.id})
})


const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server is running on 3000")
})
