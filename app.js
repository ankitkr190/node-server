// Importing modules
const express = require("express");
const axios = require("axios");
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

myfirstApi = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
      console.log(response.data);
    })
    .catch(e => console.log(e));
};

myfirstApi();

// listening server
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
