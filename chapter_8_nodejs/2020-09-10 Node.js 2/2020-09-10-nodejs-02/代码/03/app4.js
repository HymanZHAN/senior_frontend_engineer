const Koa = require('koa');
const staticCache = require('koa-static-cache');
const KoaRouter = require('@koa/router');

const app = new Koa();

// 静态
app.use( staticCache({
    prefix: '/static',
    dir: __dirname + '/public',
    gzip: true,
    // 开发中使用，动态监控静态目录的文件变化
    dynamic: true
}) );

// 动态
// app.use( async ctx => {
//     if (ctx.url == '/') {
//         // fn1
//     } else {
//         // fn2
//     }
// } )

// 通过 router 对象来管理url与函数的对应关系
const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = '首页';
});

router.get('/register', async ctx => {
    ctx.body = '注册';
});

app.use( router.routes() );



app.listen(8888);