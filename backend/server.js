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
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//Cross-Origin Resource Sharing - allows communication with React
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
//Initialize passport, then use it to set up a session
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/neweggDB", {useNewUrlParser: true});
// mongoose.set("useCreateIndex", true);

const cartSchema = new mongoose.Schema({
    productId: String
});

const userSchema = new mongoose.Schema ({
    // email: {type: String, required: true, unique: true}, 
    // password: String,
    // googleId: {type: String, required: true},
    // secret: String,
    // products: [cartSchema],
    // username: String

    password: String,
    googleId: String,
    secret: String
});

const productSchema = new mongoose.Schema({
	  name: {type: String, required: true},
	  price: {type: Number, required: true},
	  image: {type: String, required: true},
	  type: {type: String, required: true},
	  brand: {type: String, required: true},
	  platform: {type: String, required: true}
});

//Important to place this after defining model for userSchema
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
    callbackURL: "http://localhost:3001/auth/google/callback",
    //required to account for the deprecation of Google+
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

//Sign in with google - after, we want the user's profile id 
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
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

app.post("/", function(req, res, next) {
  console.log(req.body.caller);
  if (req.body.caller === "login") {
      const user = new User({
        username: req.body.userInfo.username,
        password: req.body.userInfo.password
      });
      console.log(user);
      req.login(user, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("https://locahost:3000/");
            });
        }
      });
  } else if (req.body.caller === "register") {
      const fullName = req.body.userInfo.firstname + " " + req.body.userInfo.lastname;
      // const user = new User({
      //   email: req.body.userInfo.username,
      //   googleId: fullName,
      //   username: req.body.userInfo.username
      // });
      // console.log(user);
      User.register({username: req.body.userInfo.username}, req.body.userInfo.password, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            // passport.authenticate("local")(req, res, next, function(){
            //     // res.redirect("https://locahost:3000/");
            //     console.log('hello');
            //     res.json({username: fullName});
            // });
            // console.log('hi');
            passport.authenticate("local", (err, user, info) => {
              if (err) throw err;
              if (!user) res.send("No User Exists");
              else {
                req.logIn(user, (err) => {
                  if (err) throw err;
                  res.send("Successfully Authenticated");
                  console.log(req.user);
                });
              }
            })(req, res, next);

        }
      });
  }
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
  var queryId = req.params.id;
  if (queryId.trim().toLowerCase().match(/^.*(processor|cpu|i3|i5|i7|ryzen).*$/)) {
    queryId = "CPU";
  } else if (queryId.trim().toLowerCase().match(/^.*(graphics|card|gtx|rtx|rx|gpu).*$/)) {
    queryId = "GPU";
  } else if (queryId.trim().toLowerCase().match(/^.*(memory|ram|ghz).*$/)) {
    queryId = "RAM";
  } else if (queryId.trim().toLowerCase().match(/^.*(mobo|mother|board|z390|x370|b450|b550|a320|lga).*$/)) {
    queryId = "Motherboard";
  } else if (queryId.trim().toLowerCase().match(/^.*(atx|case|chassis|tempered|glass|acrylic).*$/)) {
    queryId = "Case";
  } else if (queryId.trim().toLowerCase().match(/^.*(watt|psu|power|supply|bronze|gold).*$/)) {
    queryId = "PSU";
  } else if (queryId.trim().toLowerCase().match(/^.*(msi|nvidia|evga|gigabyte|asus|am4|amd|nzxt|650w|850w).*$/)) {
    queryId = queryId.trim().toUpperCase();
  } else if (queryId.trim().toLowerCase().match(/^.*(skill).*$/)) {
    queryId = "G.Skill";
  } else if (queryId.trim().toLowerCase().match(/^.*(corsair|montech|intel).*$/)) {
    queryId = queryId.charAt(0).toUpperCase() + queryId.slice(1).toLowerCase();
  }
  Product.find({$or: [{type: queryId}, {brand: queryId}, {platform: queryId}]}, function(err, products) {
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

