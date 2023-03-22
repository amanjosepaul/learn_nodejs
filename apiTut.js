const data = require("./constantData");
const http = require("http");
console.log("http: ", http);

// static api exmple
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(5000);
