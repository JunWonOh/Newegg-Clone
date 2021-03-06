//jshint esversion:6
require('dotenv').config();
//TEMPORARY, FOR TESTING
const port = 3001;
//array of products from products.js
const testProducts = require('./products');
const express = require('express');
const cors = require('cors')
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
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
app.use(cors({
  origin: "https://localhost:3000",
  credentials: true
}));

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser(process.env.SECRET));
//Initialize passport, then use it to set up a session
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/neweggDB", {useNewUrlParser: true});

const cartSchema = new mongoose.Schema({
    productId: String
});

const userSchema = new mongoose.Schema ({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    isAdmin: Boolean,
    cartItems: [cartSchema]
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
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

// Commented out to prevent duplication of entries in database
// Product.insertMany(testProducts);

passport.use(new localStrategy((username, password, done) => {
  User.findOne({username: username}, (err, user) => {
    if (err) throw err;
    if (!user) return done(null, false);
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) throw err;
      if (result === true) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
}));

//Format found in docs (Configure):
//https://www.passportjs.org/docs/authenticate/
//encrypts sensitive info using salting/hashing
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
//decrypts sensitive info
passport.deserializeUser((id, cb) => {
  User.findOne({_id: id}, (err, user) => {
    const userInformation = {
      username: user.username
    };
    cb(err, userInformation);
  });
})

app.get("/", function(req, res){
  //return the first 10 objects found in Product database
  Product.find({}, function(err, products) {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  }).limit(10)
});

app.post("/", function(req, res, next) {
  if (req.body.caller === "login") {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.json(user);
        });
      }
    })(req, res, next);
  } else if (req.body.caller === "register") {
    User.findOne({ username: req.body.userInfo.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.userInfo.password, 10);
        const newUser = new User({
          firstname: req.body.userInfo.firstname,
          lastname: req.body.userInfo.lastname,
          username: req.body.userInfo.username,
          password: hashedPassword,
          isAdmin: false,
          cartItems: []
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  }
});

// Given a user's username, returns its full object
app.get('/userInfo', function(req, res) {
  if (req.isAuthenticated()) {
    User.find({username: req.user.username}, function(err, currentUser) {
      res.json(currentUser);
    })
  } else {
    res.send("ERROR: passport.js found no users logged in")
  }
})

// Given a product's id, returns its full object
app.get('/getProduct/:id', function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!err) {
      res.json(product);
    } else {
      res.send(err);
    }
  });
})

// Given a user's username, returns if the user is an admin
app.get('/is-admin', function(req, res) {
  if (req.isAuthenticated) {
    User.find({username: req.user.username}, function(err, currentUser) {
      res.send(currentUser[0].isAdmin);
    })
  }
})

// Logs user out
app.get("/logout", function(req, res) {
  req.logout();
  res.send("Logged out");
})

// Inserts/removes an item in cart
app.post("/cart/:task", function(req, res) {
  if (req.isAuthenticated()) {
    if (req.params.task === "insert") {
      const cartItem = new Cart({
        productId: req.body.productId
      });
      User.findOneAndUpdate({username: req.user.username}, {$push: {cartItems: cartItem}}, function(err, user) {
        if (!err) {
          res.send("item added!");
        } else {
          res.send(err);
        }
      })
    }
    else if (req.params.task === "remove") {
      User.findOneAndUpdate({username: req.user.username}, {$pull: {cartItems: {productId: req.body.productId}}}, function(err, user) {
        if (!err) {
          res.send("item removed!");
        } else {
          res.send(err);
        }
      })
    }
  } else {
    res.send("not authorized");
  }
}) 

app.post("/upload-product", function(req, res) {
  if (req.isAuthenticated()) {
    User.find({username: req.user.username}, function(err, currentUser) {
      if (currentUser[0].isAdmin) {
        console.log(req.body.name);
        Product.findOne({ name: req.body.name }, async (err, doc) => {
          if (err) throw err;
          if (doc) res.send("Product Already Exists");
          if (!doc) {
            const product = new Product({
              name: req.body.name,
              price: req.body.price,
              image: req.body.image,
              type: req.body.type,
              brand: req.body.brand,
              platform: req.body.platform
            })
            await product.save();
            res.send("Product successfully uploaded");
          }
        });
      }
    });
  }
})

// Performs regex to determine the key to query by, and returns the product's object when found.
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

