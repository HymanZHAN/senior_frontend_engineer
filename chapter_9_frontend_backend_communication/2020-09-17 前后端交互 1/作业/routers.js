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

router.get("/", async (ctx) => {
  ctx.body = tpl.render("index.njk");
});

const uploadPath = "/static/upload";
const koaBodyOptions = {
  multipart: true,
  formidable: {
    uploadDir: `${__dirname}${uploadPath}`,
    keepExtensions: true,
  },
};

router.post("/upload", koaBody(koaBodyOptions), async (ctx, next) => {
  const { photo } = ctx.request.files;

  if (photo.type.split("/")[0] !== "image") {
    ctx.body = "Invalid file type";
    ctx.status = 400;
    try {
      fs.unlinkSync(photo.path);
    } catch {
      console.error("Cannot delete photo.");
    }
    ctx.res.end();
  } else {
    const path = photo.path.replace("\\", "/");
    const relativePath = `${uploadPath}/${path.split(`${uploadPath}/`)[1]}`;

    await query(
      "insert into `photos` (`filename`, `type`, `size`) values (?, ?, ?)",
      [relativePath, photo.type, photo.size]
    );
  }
});

router.get("/getPhotos", async (ctx) => {
  const results = await query("select `filename` from `photos`");
  ctx.body = results.map((rs) => rs.filename);
});

module.exports.router = router;
