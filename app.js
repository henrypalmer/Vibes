const express = require('express')
const ejs = require('ejs')
const stripe = require('stripe')('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')
const app = express()
const bodyParser = require("body-parser")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

function Item(name, unit_amount, quantity) {
  this.price_data = {}
  this.price_data.currency = 'usd'
  this.price_data.product_data = {}
  this.price_data.product_data.name = name
  this.price_data.unit_amount = unit_amount
  this.quantity = quantity
}

item1 = new Item("backBLACK",2499, 1)
item2 = new Item("backMAROON",2499, 1)
item3 = new Item("maroonIDKMAN",2499, 1)
const cart = []
cart.push(item1)
cart.push(item2)
cart.push(item3)


const line_items = []
  // {
  //   price_data: {
  //     currency: 'usd',
  //     product_data: {
  //       name: "T-shirt",
  //     },
  //     unit_amount: 2000,
  //   },
  //   quantity: 1,
  // }



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

app.get("/mug", (req, res) => res.render('mug.ejs'))

app.get("/success", function(req, res) {
  res.render("success")
})

app.get("/cancel", function(req, res) {
  res.render("cancel")
})

app.post('/cart', function(req,res) {
  var size = req.body.size
  var quantity = req.body.qnty
  // let item = new Item(name, unit_amount, quantity)
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
    // line_items: [
    //   {
    //     price_data: {
    //       currency: 'usd',
    //       product_data: {
    //         name: 'T-shirt',
    //       },
    //       unit_amount: 2000,
    //     },
    //     quantity: 1,
    //   },
    // ],
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
