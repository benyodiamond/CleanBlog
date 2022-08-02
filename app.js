const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require('mongoose');
const post = require('./model/Post');


const app = express();



//Mognoose

mongoose.connect('mongodb://127.0.0.1:27017/clean-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });app.get("/add_post", (req, res) => {
    res.render("add_post");
  });app.get("/post", (req, res) => {
    res.render("post");
  });

  app.post("/posts",  async (req, res) => {
     await  post.create(req.body);
     res.redirect("/")
  });
  



  
  

const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});