const http = require('http');
const fs = require('fs');
// const nunjucks = require('./libs/nunjucks');
const nunjucks = require('nunjucks');

const mime = require('./mime.json');
const categories = require('./data/categories.json');

// console.log('nunjucks', nunjucks)
const tpl = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('./template'),
    {
        // 动态编译（模板只要变化重新编译）
        watch: true,
        // 每次都从硬盘中读取
        noCache: true
    }
);

// let content = tpl.renderString('Hello {{ username }}', {
//     username: 'zMouse'
// });
// console.log('content', content);

const server = http.createServer( (req, res) => {
    const url = req.url;
    let responseContent = '';

    if ( url.startsWith('/public') ) {
        const file = __dirname + url;

        const lastIndex = url.lastIndexOf('.');
        const suffix = url.substring(lastIndex);

        res.setHeader('Content-Type', mime[suffix]);

        responseContent = fs.readFileSync(file);
    } else {
        // 动态资源处理
        if (url === '/') {
            // responseContent = fs.readFileSync('./template/index.html');
            // 这里的模板文件是相对于 new nunjucks.FileSystemLoader('./template') 这里的设置模板目录进行查找的
            responseContent = tpl.render('index.html', {
                categories
            });
        }
    }

    res.end(responseContent);

} );

server.listen(8888);