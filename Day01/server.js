const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.get("/seung", (req, res) => {
  res.send("next Page seung!");
});
