const Koa = require('koa');
const KoaRouter = require('@koa/router');
const KoaBody = require('koa-body');
const mysql = require('mysql2');

// 创建一个mysql的链接对象
// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '12345678',
//     database: 'photos'
// });

function query(sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, function(err, results) {
            if (err) {
                reject(err);
            } else{
                resolve(results);
            }
        });
    })
}

const app = new Koa();

let users = [
    {id: 1, name: 'haizi'},
    {id: 2, name: 'zmouse'}
]

const router = new KoaRouter();

router.get('/api', async ctx => {
    ctx.body = '欢迎使用API';
});

router.get('/getUsers', async ctx => {
    // console.log('请求过来了')

    ctx.set('Access-Control-Allow-Origin', '*');

    ctx.body = users;
});

router.options('/postUser', async ctx => {
    console.log('预检请求');
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    ctx.body = '';
})
router.post('/postUser', KoaBody({
    multipart: true
}), async ctx => {

    ctx.set('Access-Control-Allow-Origin', '*');

    console.log(typeof ctx.request.body, ctx.request.body);

    ctx.body = '提交成功';

});

app.use( router.routes() );



app.listen(8888);