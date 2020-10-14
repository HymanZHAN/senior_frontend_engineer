import Koa from 'koa';
import {Get, Auth} from '../KKB/decorators';

// @Controller('/user')
// 参考：https://www.npmjs.com/package/koa-ts-controllers
export default class User {

    // public routes = [
    //     {
    //         verb: 'get',
    //         url: '/user',
    //         name: 'index'
    //     },
    //     {
    //         verb: 'get',
    //         url: '/register',
    //         name: 'register'
    //     },
    //     {
    //         verb: 'get',
    //         url: '/login',
    //         name: 'login'
    //     }
    // ]

    @Get('/user')
    @Auth()
    async index(ctx: Koa.Context) {
        ctx.body = '用户中心首页';
    }

    @Get('/register')
    async register(ctx: Koa.Context) {
        ctx.body = '注册';
    }

    @Get('/login')
    async login(ctx: Koa.Context) {
        ctx.body = '登录';
    }

}