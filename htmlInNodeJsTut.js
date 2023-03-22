const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.join(__dirname, "public");
console.log("publicPath: ", publicPath);

// app.get("/", (req, res) => {
//   res.send(`
//   <h1> <a href="/html">Go to html</a></h1>
//     `);
// });

// app.get("/html", (req, res) => {
//   res.send(`
//   <input type="text" value="Hello Jonty"/>
//   <button> Click Me</button>
//     `);
// });

//  // display static html page

// app.use(express.static(publicPath));

// // display static without extension

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

// // for no page found or error

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/noPageFound.html`);
});

app.listen(5000);
