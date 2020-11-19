import Koa from 'koa';

export async function index(ctx: Koa.Context) {
    ctx.body = '用户中心首页';
}

export async function register(ctx: Koa.Context) {
    ctx.body = '注册';
}

export async function login(ctx: Koa.Context) {
    // 接收请求，处理基本逻辑
    let {username, password} = (ctx.request as any).body;

    // let div = document.querySelector('.box') as HTMLImageElement;   //<img class="box"></div>
    //
    // div.src;

    // 对username，password等各种数据进行一些基本处理

    // 存储
    // let userModel = new UserModel();
    // let data = userModel.login(username, password);

    // ctx.view('message.html', data);

    // ctx.body = '登录';
}