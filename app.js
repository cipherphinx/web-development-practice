//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// First app.get
app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

// First app.post
app.post("/", function(req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/Work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

// Second app.get
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

// Second app.post
app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

// Third app.get
app.get("/about", function(req, res){
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
