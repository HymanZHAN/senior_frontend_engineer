const Koa = require('koa');
const KoaRouter = require('@koa/router');
const KoaBody = require('koa-body');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

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
    {id: 1, name: 'haizi', password: '123'},
    {id: 2, name: 'zmouse', password: '123'}
]

const router = new KoaRouter();

router.get('/api', async ctx => {

    console.log('...', ctx.get('Authorization'))

    if (ctx.get('Authorization')) {
        let token = ctx.get('Authorization');
        let decoded = jwt.verify(token.replace('Bearer ', ''), 'kaikeba');
        console.log(decoded);
        // decoded.id
        if (!decoded) {
            ctx.body = '无权访问';
            return;
        }
    }

// select * from photos where uid=decoded.id

    ctx.body = '欢迎使用API';
});

router.post('/login', async ctx => {

    // 验证通过了
    let token = jwt.sign({id: 1, name: 'haizi'}, 'kaikeba');
    console.log('token', token);

    ctx.set('Authorization', 'Bearer ' + token);

    ctx.body = '登录成功';
});




app.use( router.routes() );



app.listen(8888);