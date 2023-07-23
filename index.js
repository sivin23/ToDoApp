const express = require("express");
const bodyParser = require("body-parser");
let ejs = require("ejs");
const Day = require(__dirname+"/DateFunction.js");

const app = express();

// Set ejs engine
app.set("view engine", "ejs");

// use body parser for data access from the requests
app.use(bodyParser.urlencoded({ extended: true }));

// Static files access for the projects
app.use(express.static("public"));

// Global variables
const newItems = [];

// Home request
app.get("/", function (req, res) {

  // const day = Day.DateFunction();
  const day = Day.DayFunction();
  res.render("list", {
    dayOfTheWeek: day,
    newListItem: newItems,
  });
});

// POST request
app.post("/", function (req, res) {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect("/");
});
// App Listen
app.listen(process.env.listen || 3001, function () {
  console.log("Server started at 3001 locally");
});
