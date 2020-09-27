const Koa = require("koa");
const { router } = require("./routers");
const { init, JWT_SECRET } = require("./setup");
const KoaStaticCache = require("koa-static-cache");
const jwt = require("koa-jwt");

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

app.use(
  jwt({ secret: JWT_SECRET }).unless({
    path: [/^\/$/, /^\/static/, /^\/login/],
  })
);

app.use(router.routes());

app.listen(8888);
