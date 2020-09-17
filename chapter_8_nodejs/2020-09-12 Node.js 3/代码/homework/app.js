const Koa = require('koa');
const KoaRouter = require('koa-router');
const fs = require('fs');

const app = new Koa();
const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = fs.readFileSync('./public/index.html').toString();
})

app.use( router.routes() );

app.listen(8888);