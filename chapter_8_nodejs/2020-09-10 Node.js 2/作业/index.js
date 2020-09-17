const Koa = require("koa");
const Router = require("@koa/router");
const fs = require("fs");

const app = new Koa();

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = fs.readFileSync(__dirname + "/public/index.html").toString();
});

app.use(router.routes());

app.listen(8888);
