const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");

let app = new Koa();

let router = new Router();

app.use(
  views(__dirname + "/views", {
    map: {
      html: "pug",
    },
  })
);

router.get("/", async (ctx) => {
  // ctx.body = "Hello, World";
  let users = [
    {
      name: "TestUser1",
      age: 18,
    },
    {
      name: "TestUser2",
      age: 28,
    },
    {
      name: "TestUser3",
      age: 40,
    },
  ];
  await ctx.render("index.pug", { users });
});

app.use(router.routes());
app.listen(3000);
