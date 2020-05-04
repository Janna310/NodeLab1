"use strict";
const http = require("http");

const say = require("./quotes");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });

    const count = Math.floor(Math.random() * Math.floor(4));
    console.log(say);

    res.write(`${say.quotes[count]}`);
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is running on", 3000);
  });
