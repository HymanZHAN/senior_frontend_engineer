const fs = require("fs");
const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = fs.readFileSync(__dirname + "/index.html").toString();
  next();
});

app.use(router.routes());

const server = require("http").createServer(app.callback());
const options = {};
const io = require("socket.io")(server, options);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("message:", msg);
    const datetime = new Date();
    const date = datetime.toISOString().split("T")[0];
    const time = datetime.toISOString().split("T")[1].split(".")[0];

    const message = {
      id: socket.id,
      message: msg,
      datetime: `${date} ${time}`,
    };

    io.emit("message", message);
  });

  socket.emit("hello", { id: socket.id });
  socket.broadcast.emit("welcome", { id: socket.id });
});

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
