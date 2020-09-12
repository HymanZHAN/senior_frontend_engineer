const http = require('http');
const fs = require('fs');
const mime = require('./mime.json')

const server = http.createServer( (req, res) => {
    const url = req.url;
    let responseContent = '';

    if ( url.startsWith('/public') ) {
        // 静态资源处理
        // 规则：/public 开头的访问的是静态资源
        // /public/1.html
        // __dirname => 存储当前脚本文件所在的绝对路径
        const file = __dirname + url;

        const lastIndex = url.lastIndexOf('.');
        const suffix = url.substring(lastIndex);

        res.setHeader('Content-Type', mime[suffix]);

        responseContent = fs.readFileSync(file);
    } else {
        // 动态资源处理
    }

    res.end(responseContent);

} );

server.listen(8888);