// node 内置的 http 模块就可以监听网卡数据（进行网络编程）
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('app2');
})

server.listen(9999);