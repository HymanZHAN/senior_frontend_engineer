const Koa = require("koa");
const { router } = require("./routers");
const { init } = require("./setup");

init();

const app = new Koa();

app.use(router.routes());

app.listen(8888);
