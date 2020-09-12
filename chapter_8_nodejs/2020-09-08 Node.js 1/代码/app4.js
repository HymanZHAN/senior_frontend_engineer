const http = require('http');
const fs = require('fs');
const mime = require('./mime.json')

const server = http.createServer();

// console.log('mime', mime);

server.on('request', (req, res) => {


    const url = req.url;

    let resContent = '';
    

    if (url.startsWith('/public')) {
        // url => /public/1.html => ./public/1.html
        const lastIndex = url.lastIndexOf('.');
        // console.log('lastIndex', lastIndex);
        const suff = url.substring(lastIndex);
        // console.log('suff', suff, mime[suff]);

        res.setHeader('Content-Type', mime[suff] + ';charset=utf-8');

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