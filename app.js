const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();
// connection to mongoDB
const dbURI =
  "mongodb+srv://shaun:test1234@note-tut.voobvxw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to DB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
//setting view engines
app.set("view engine", "ejs");

// initialis
app.get("/", (req, res) => {
  res.render("home", { title: "homepage" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/allblogs", (req, res) => {
  const blogs = [
    { title: "title 1", snippet: "jfdsf jdlfkaj fdjlsfj djlsfj jflsadjf" },
    { title: "title 2", snippet: "jfdsf jdlfkaj fdjlsfj djlsfj jflsadjf" },
    { title: "title 3", snippet: "jfdsf jdlfkaj fdjlsfj djlsfj jflsadjf" },
  ];
  res.render("allblogs", { blogs });
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 1",
    snippet: "first description",
    body: "first detail",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res) => {
  res.render("404");
});
