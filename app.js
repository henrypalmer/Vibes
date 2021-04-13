const express = require('express')
const ejs = require('ejs')
const app = express()

/*database code

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ctadmin:vibesdb@vibes.grsee.mongodb.net/Vibes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Vibes").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/:name', (req, res) => {
  MongoClient.connect(url, 
function(errr, db){
  if(err) throw err;
  var dbo = db.db("users");
dbo.collection("customers").findOne({
  name: req.params.name 
},
  function(err, result){
    if(err) throw err;
    res.json(result);
    db.close();
  });
});
});

app.use(express.json());

app.post('/', (req, res)=>{
  MongoClient.connect(url, 
function(errr, db){
  if(err) throw err;
  var dbo = db.db("users");
dbo.collection("customers").insertOne({
  name: req.body.name,
  age: req.body.age,
  phoneNumber: req.body.phoneNumber,
  shippingAddress: req.body.shippingAddress 
},
  function(err, result){
    if(err) throw err;
    res.json(result);
    db.close();
  });
});
});


//end of database code*/

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

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server is running on 3000")
})
