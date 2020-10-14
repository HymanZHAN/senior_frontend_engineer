import Koa from 'koa';
import KoaRouter from 'koa-router';

interface IOptions {
    port?: number;
    host?: string;
}

const defaultOptions = {
    port: 8888,
    host: 'localhost'
}

export default class KKB {

    private options: IOptions;
    private server: Koa;
    public router: KoaRouter;

    constructor(
        opts: IOptions
    ) {

        this.options = {...defaultOptions, ...opts};

        this.server = new Koa();

        this.router = new KoaRouter();

        // 添加路由
        // 问题：具体的路由以及对应的函数，能在这里写死吗？肯定不能！！！！！
        // this.router.get('/', async ctx => {
        //     ctx.body = 'hello';
        // });

        this.server.use( this.router.routes() );

    }


    start() {
        return this.server.listen(
            this.options.port,
            this.options.host,
            () => {
                console.log(`服务器启动成功：http://${this.options.host}:${this.options.port}`);
            }
        );
    }
}