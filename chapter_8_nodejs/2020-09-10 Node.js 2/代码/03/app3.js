const Koa = require('koa');
const Static = require('./middlewares/static');

const app = new Koa();

// 静态资源 - Koa-static-cache
app.use( Static({
    prefix: '/static',
    dir: __dirname + '/public'
}) );

// 动态资源 - Koa-router
app.use((ctx) => {
    console.log('123123')
});

app.listen(8888);