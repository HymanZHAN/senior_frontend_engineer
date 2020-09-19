const Koa = require("koa");
const { router } = require("./routers");
const { init } = require("./setup");
const KoaStaticCache = require("koa-static-cache");

init();

const app = new Koa();
app.use(
  KoaStaticCache({
    dir: __dirname + "/static",
    prefix: "/static",
    gzip: true,
    dynamic: true,
  })
);

app.use(router.routes());

app.listen(8888);
