import http from 'http';

function fn(x: number, y:number): number {
    return x + y;
}

console.log( fn(1, 2) );

const server = http.createServer((req, res) => {
    res.end('hello - kkb');
});

server.listen(8888);



