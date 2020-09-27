const KoaRouter = require("koa-router");
const koaBody = require("koa-body");
const nunjucks = require("nunjucks");
const fs = require("fs");
const { query, JWT_SECRET } = require("./setup");
const jwt = require("jsonwebtoken");

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

router.post("/login", koaBody(), async (ctx) => {
  const loginPayload = ctx.request.body;
  users = await query(
    `SELECT * FROM users 
      WHERE username="${loginPayload.username}" 
        AND password="${loginPayload.password}"`
  );

  if (users.length === 0) {
    ctx.status = 401;
    return;
  } else {
    ctx.body = jwt.sign(
      { id: users[0].id, username: users[0].username },
      JWT_SECRET
    );
  }
});

const uploadPath = "/static/upload";
const koaBodyUploadOptions = {
  multipart: true,
  formidable: {
    uploadDir: `${__dirname}${uploadPath}`,
    keepExtensions: true,
  },
};

router.post("/upload", koaBody(koaBodyUploadOptions), async (ctx, next) => {
  const { photo } = ctx.request.files;
  const user = ctx.state.user;

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
      "insert into `photos` (`filename`, `type`, `size`, `userId`) values (?, ?, ?, ?)",
      [relativePath, photo.type, photo.size, user.id]
    );
  }
});

router.get("/getPhotos", async (ctx) => {
  const user = ctx.state.user;
  const results = await query(
    "select `filename` from `photos` where `userId`=?",
    [user.id]
  );
  ctx.body = results.map((rs) => rs.filename);
});

module.exports.router = router;
