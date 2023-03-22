const reqFilter = require("../core/middleWare");
const express = require("express");
const app = express();
const router = express("router");

router.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to Home");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to About Page");
});

app.get("/help", reqFilter, (req, resp) => {
  resp.send("Welcome to About Page");
});

router.get("/contact", (req, resp) => {
  resp.send("Welcome to Contact Page");
});

app.use("/", router);
app.listen(5000);
