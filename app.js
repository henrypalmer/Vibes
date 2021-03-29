const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


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



const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server is running on 3000")
})
