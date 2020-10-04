const KoaRouter = require("koa-router");
const koaBody = require("koa-body");
const nunjucks = require("nunjucks");
const { query } = require("./setup");

const router = new KoaRouter();

const tpl = new nunjucks.Environment(
  new nunjucks.FileSystemLoader("./templates"),
  {
    watch: true,
    noCache: true,
  }
);

router.get("/register", async (ctx) => {
  ctx.body = tpl.render("register.njk");
});

const koaBodyOptions = {
  multipart: true,
};

router.post("/register", koaBody(koaBodyOptions), async (ctx) => {
  try {
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;

    if (username === "" || password === "") {
      throw new Error("Neither username nor password can be blank");
    }

    await query("insert into `users` (`username`, `password`) values (?, ?)", [
      username,
      password,
    ]);

    ctx.body = tpl.render("register.njk", {
      message: {
        body: "注册成功！",
      },
    });
  } catch (error) {
    console.error(error);
    ctx.body = tpl.render("register.njk", {
      message: {
        body: "注册失败...",
      },
    });
  }
});

module.exports.router = router;
