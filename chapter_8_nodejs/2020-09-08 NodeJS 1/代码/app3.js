const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {


    const url = req.url;

    let resContent = '';

    // if (url === '/woshi1.html') {
    //     resContent = fs.readFileSync('./public/1.html');
    // } else if (url === '/1.css') {
    //     resContent = fs.readFileSync('./public/1.css');
    // }

    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    if (url.startsWith('/public')) {
        // url => /public/1.html => ./public/1.html
        resContent = fs.readFileSync('.' + url);
    } else {
        // 这里处理动态资源，以及其它一些情况
        if (url == '/now') {
            resContent = (new Date).toString();
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