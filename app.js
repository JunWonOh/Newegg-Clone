//jshint esversion:6
const port = 3000;

const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home")
})

app.listen(port, function(){
    console.log("Server initialized on port " + port);
});
