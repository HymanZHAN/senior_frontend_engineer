const KoaRouter = require("koa-router");
const koaBody = require("koa-body");
const nunjucks = require("nunjucks");
const fs = require("fs");
const { query } = require("./setup");

const router = new KoaRouter();

const tpl = new nunjucks.Environment(
  new nunjucks.FileSystemLoader("./templates"),
  {
    watch: true,
    noCache: true,
  }
);

router.get("/upload", async (ctx) => {
  ctx.body = tpl.render("upload-form.njk");
});

const koaBodyOptions = {
  multipart: true,
  formidable: {
    uploadDir: __dirname + "/attachments",
    keepExtensions: true,
  },
};

router.post("/upload", koaBody(koaBodyOptions), async (ctx) => {
  const { file } = ctx.request.files;
  const path = file.path.replace("\\", "/");
  const relativePath = `/attachments/${path.split("/attachments/")[1]}`;

  await query(
    "insert into `attachments` (`filename`, `type`, `size`) values (?, ?, ?)",
    [relativePath, file.type, file.size]
  );

  ctx.body = tpl.render("message.njk", {
    message: {
      title: "成功",
      body: "上传成功",
    },
  });
});

module.exports.router = router;
