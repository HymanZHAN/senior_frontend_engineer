const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');

const app = new Koa();

app.use(KoaStaticCache({
    prefix: '/',
    dir: __dirname + '/static',
    gzip: true,
    dynamic: true
}));


app.listen(9999);