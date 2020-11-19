import Koa from 'koa';

export async function index(ctx: Koa.Context) {
    ctx.body = '首页';
}