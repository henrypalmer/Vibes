const express = require('express')
const ejs = require('ejs')
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

app.get("/backBlack", function(req, res) {
  res.render("backBlack")
})

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server is running on 3000")
})
