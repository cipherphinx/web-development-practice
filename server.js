//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, World!<h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: cipherphinx@gmail.com")
});

app.get("/about", function(req, res) {
  res.send("I am Phinx, an aspiring web developer!")
});

app.get("/hobbies", function(req, res) {
      res.send("<ul><li>Sex</li><li>Gaming</li><li>Motor Drag Race</li></ul>")
      });

    app.listen(3000, function() {
      console.log("Server started on port 3000")
    });
