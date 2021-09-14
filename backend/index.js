// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/", (req, res) => {
  res.render("home")
  console.log('hello');
});

app.get("/home", (req, res) => {
  res.render("home")
  console.log("hola");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});