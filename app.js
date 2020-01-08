// Importing modules
const express = require("express");

// Creating express server
var app = express();

// assigning port number
const port = process.env.PORT || 3000;

// creating routes
app.get("/", (req, res) => {
  res.send("aniket");
});

app.get("/login", (req, res) => {
  res.send("This is login page");
});



// listening server
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
