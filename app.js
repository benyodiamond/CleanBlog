const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/Post");
const app = express();
const methodOverride = require("method-override");
const postControllers = require("./controllers/postControllers");
const pageControllers = require("./controllers/pageControllers");

//Mognoose
mongoose
  .connect(
    "mongodb+srv://diamond:B.elmas123@cluster0.migr2.mongodb.net/clean-db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("CleanBlog Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// Routes
app.get("/", postControllers.getAllPosts);
app.get("/posts/:id", postControllers.getPost);
app.post("/posts", postControllers.createPost);
app.put("/posts/:id", postControllers.updatePost);
app.delete("/posts/:id", postControllers.deletePost);

app.get("/about", pageControllers.getAboutPage);
app.get("/add_post", pageControllers.getAddPage);
app.get("/posts/edit/:id", pageControllers.getEditPage);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
