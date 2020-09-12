// 暗号：webserver
const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const resFile = fs.readFileSync("./public/index.html");
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end(resFile);
});

server.listen(8888, () => {
  console.log("Server started. Listening on: http://localhost:8888");
});
