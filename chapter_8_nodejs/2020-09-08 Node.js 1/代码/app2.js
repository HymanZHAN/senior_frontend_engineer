// 加载 node.js 内置的模块 http，使用它来进行基于 http 的网络编程
const http = require('http');
const fs = require('fs');

// 使用 http.Server 类创建一个 server 对象，这个对象可以监听网卡、端口，就可以对请求发送的数据进行处理，然后进行返回
// const server = new http.Server();
// 也可以通过 http 的一个静态工厂方法来创建这个对象
// const server = http.createServer(() => {
//     // 等同 connection 事件函数
//     console.log('有人发送请求了');
// });

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('有人发送请求了!');
});

server.on('request', (req, res) => {
    // 与请求的客户端信息有关的数据和方法通过 req 对象提供
    // console.log('req', req);
    // 与服务端信息有关的数据和方法通过 res 对象提供
    // console.log('res', res);

    

    // res.write('Hello');
    // res.end();

    const url = req.url;

    // console.log('url', url);

    let resContent = '';

    // 针对不同url进行不同的处理
    if (url == '/') {
        // 返回一个字符串
        resContent = 'hello';
    } else if (url == '/now') {
        resContent = (new Date).toString();
    } else if (url == '/kkb') {
        resContent = fs.readFileSync('./kkb.html');
    } else {
        resContent = '啥也没有';
    }

    res.end(resContent);
})

// 监听网卡和端口
server.listen(8888, () => {
    console.log('服务启动成功：http://localhost:8888');
});