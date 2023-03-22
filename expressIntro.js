const express = require("express")();
// console.log("express: ", express);

express.get("", (req, res) => {
  res.send("hello world");
});

express.get("/home", (req, res) => {
  res.send("Home Page world");
});

express.get("/about", (req, res) => {
  console.log("req: ", req.query);
  res.send("Wellcom, " + req.query.name);
});

express.listen(4000);
