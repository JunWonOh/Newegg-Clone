//jshint esversion:6
require('dotenv').config();
//TEMPORARY, FOR TESTING
const port = 3001;
//array of products from products.js
const testProducts = require('./products');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
//Cross-Origin Resource Sharing - allows communication with React
app.use(cors());

app.use(session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false
}));
//Initialize passport, then use it to set up a session
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/neweggDB", {useNewUrlParser: true});

const cartSchema = new mongoose.Schema({
    productId: String
});

const userSchema = new mongoose.Schema ({
    email: String, 
    password: String,
    googleId: String,
    secret: String,
    products: [cartSchema]
});

const productSchema = new mongoose.Schema({
	  name: String,
	  price: Number,
	  image: String,
	  type: String,
	  brand: String,
	  platform: String
});

//Inportant to place this before defining model for userSchema
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const Cart = mongoose.model("Cart", cartSchema);
const User = new mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

// Commented out to prevent duplication of entries in database
// Product.insertMany(testProducts);

passport.use(User.createStrategy());

//Format found in docs (Configure):
//https://www.passportjs.org/docs/authenticate/
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});

//Format found in docs:
//https://www.passportjs.org/packages/passport-google-oauth20/
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    //the URL in which the GET request will be issued upon login
    callbackURL: "http://localhost:3000/auth/google/secrets",
    //required to account for the deprecation of Google+
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
//Use passport.authenticate(), specifying the 'google' strategy, to authenticate requests.
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.get("/", function(req, res){
  // Product.find()
  // .then(products => res.json(products))
  // .catch(err => res.status(400).json('Error: ' + err));
  Product.find({}, function(err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  }).limit(10)
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/cart", function(req, res) {
    res.render("cart")
});

app.get('/p/:id', function(req, res) {
  const queryId = req.params.id;
  Product.find({type: queryId}, function(err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  })
}); 

app.listen(port, function(){
    console.log("Server initialized on port " + port);
    console.log("From server.js");
});

