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
    ctx.body = users;
});

router.post('/postUser', KoaBody({
    multipart: true
}), async ctx => {
    console.log(typeof ctx.request.body, ctx.request.body);
    ctx.body = '提交成功';
});

app.use( router.routes() );



app.listen(8888);