const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/Post");
const app = express();
const methodOverride = require('method-override');
const postControllers = require('./controllers/postControllers');
const pageControllers = require('./controllers/pageControllers');

//Mognoose
mongoose.connect("mongodb://127.0.0.1:27017/clean-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);


// Routes
app.get('/', postControllers.getAllPosts);
app.get('/posts/:id', postControllers.getPost);
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost);

app.get('/about', pageControllers.getAboutPage);
app.get('/add_post', pageControllers.getAddPage);
app.get('/posts/edit/:id', pageControllers.getEditPage);


const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});
