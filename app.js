const express = require('express')
const ejs = require('ejs')
const stripe = require('stripe')('sk_test_51IgyKJDfhazcEVWkbK54boaeLLueCf64nAYzsAOLS7wtp7lSrkkDGEH4XApNfYOWCUGyNB79P6jkOlJ8qU7hTyC800lBsgwvGB')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

function Item(name, id, price) {
  this.name = name
  this.id = id
  this.price = price
}

item1 = new Item("backBLACK", 123, 24.99)
item2 = new Item("backBLACK", 123, 24.99)
item3 = new Item("backBLACK", 123, 24.99)

const cart = []
cart.push(item1)
cart.push(item2)
cart.push(item3)

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
  res.render("cart", {cart: cart})
})

app.get("/backBlack", (req, res) => res.render('backBLACK.ejs'))

app.get("/backMAROON", (req, res) => res.render('backMAROON.ejs'))

app.get("/bear", (req, res) => res.render('bear.ejs'))

app.get("/maroonIDKMAN", (req, res) => res.render('maroonIDKMAN.ejs'))

app.get("/lightpinkIDKMAN", (req, res) => res.render('lightpinkIDKMAN.ejs'))

app.get("/breakableheart", (req, res) => res.render('breakableheart.ejs'))

app.get("/sugarcookies", (req, res) => res.render('sugarcookies.ejs'))

app.get("/success", function(req, res) {
  res.render("success")
})

app.get("/cancel", function(req, res) {
  res.render("cancel")
})

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
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
