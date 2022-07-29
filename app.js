const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const Blog = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  };
  res.send(Blog);
});


const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});