const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

// Template Engine
app.set("view engine", "ejs");
// Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });app.get("/add_post", (req, res) => {
    res.render("add");
  });app.get("/post", (req, res) => {
    res.render("index");
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});