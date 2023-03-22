const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  req.query.age > 18
    ? next()
    : resp.send("Below 18 years age is not authorised");
};

// // This is an Application-level MiddleWare

app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome");
});

app.get("/user", (req, resp) => {
  resp.send("Welcome User");
});

app.listen(5000);
