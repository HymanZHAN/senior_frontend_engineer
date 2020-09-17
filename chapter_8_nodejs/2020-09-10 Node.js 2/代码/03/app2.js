const Koa = require('koa');

const app = new Koa();

// use => http.createServer 的回调函数
// 方便扩展，Koa 提供了一个基础的框架，但是实际的业务处理中的工作是比较多而且杂的，有些是你自己写的业务逻辑代码，有的时候还要用一些第三方的代码
// 类似事件注册机制，通过 use 注册N多个不同的callback
// 多个事件函数是相互独立，平行的
// 但是koa中是需要的关联的，执行逻辑顺序问题
// middleware：中间件

const kkb = (ctx, next) => {
    // next();

    // ctx.req;
    // ctx.res;
    console.log('我是kkb提供的一个第三方函数')

    // 当前中间件的下一个中间件

    // 鉴权
    let isLogin = false;
    if (isLogin) {
        next();
    }

}
app.use( kkb );

app.use( () => {
    console.log('我的小秘密');
} );

app.listen(8888);