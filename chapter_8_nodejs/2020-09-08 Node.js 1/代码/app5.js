const http = require('http');
const fs = require('fs');
const mime = require('./mime.json')

const server = http.createServer();

// console.log('mime', mime);
// 后面我们会用数据库去存储，同时这个数据还会发生一些改变
let users = [
    {id: 1, username: 'HaiZi', gender: '男'},
    {id: 2, username: 'zMouse', gender: '男'}
]

server.on('request', (req, res) => {


    const url = req.url;

    let resContent = '';
    
    if (url.startsWith('/public')) {
        const lastIndex = url.lastIndexOf('.');
        const suff = url.substring(lastIndex);

        res.setHeader('Content-Type', mime[suff] + ';charset=utf-8');

        resContent = fs.readFileSync('.' + url);
    } else {
        console.log(url);
        if (url == '/now') {
            resContent = (new Date).toString();
        } else if (url === '/users') {
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            // resContent = JSON.stringify(users);

            let str = users.map( user => {
                return `<li>${user.username}</li>`
            } ).join('');
            // console.log('str', str);

            resContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/public/1.css">
            </head>
            <body>
                <ul>${str}</ul>
            </body>
            </html>
            `

        } else {
            resContent = '啥也没有';
        }
    }


    res.end(resContent);
})

// 监听网卡和端口
server.listen(8888, () => {
    console.log('服务启动成功：http://localhost:8888');
});