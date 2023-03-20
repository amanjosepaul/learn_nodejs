var http = require("http");
// console.log("http: ", http);

http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("I am Aman Jose Paul");
    res.write("<h1>I am Aman Jose Paul</h1>");
    // res.end("Hello World! - Aman");
    res.end();
  })
  .listen(8080);
