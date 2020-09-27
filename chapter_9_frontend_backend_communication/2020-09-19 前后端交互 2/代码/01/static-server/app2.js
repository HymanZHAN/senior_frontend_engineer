const Koa = require('koa');
const http = require('http');
const KoaStaticCache = require('koa-static-cache');

const app = new Koa();

app.use(async (ctx, next) => {
    const options = {
        protocol: 'http:',
        hostname: 'localhost',
        port: 8888,
        path: '/getUsers',
        method: 'get'
    };
    if (ctx.url === '/getUsers') {
        let data = await proxyRequest(options);
        ctx.body = data;
    } else {
        await next();
    }
})

app.use(KoaStaticCache({
    prefix: '/',
    dir: __dirname + '/static',
    gzip: true,
    dynamic: true
}));


app.listen(9999);

function proxyRequest(options) {
    return new Promise((resolve, reject) => {
        // ctx.body = '数据给你';
        // 类似通过代码模拟一个浏览器请求，又类似ajax的请求，因为这里不是浏览器，所以不受同源策略的影响
        const req = http.request(options, (res) => {
            // 当请求的服务器响应的时候触发
            // data事件是不断触发的，服务器会不断的发送数据包，直到这次请求数据全部完成
            let data = '';
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data += chunk.toString();
            });
            // 表示这次请求的数据发送完成了
            res.on('end', () => {
                console.log('完成了', data);
                resolve(data);
            });
        });
        req.write('');
        req.end();
    })
}