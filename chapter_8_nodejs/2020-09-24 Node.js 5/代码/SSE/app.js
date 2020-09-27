const http = require('http');
const fs = require('fs');

let resData;

http.createServer( async (req, res) => {

    let url = req.url;

    if (req.url === '/') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        res.end( fs.readFileSync('./index.html') );
    } else {
        if (req.url === '/getData') {

            res.setHeader('content-type', 'text/event-stream');

            resData = await new Promise((resolve) => {
                readData();

                function readData() {
                    // let data = fs.readFileSync('./data.json').toString().replace(/\n/g, '');
                    let data = require('./data.json');
                    data = JSON.stringify(data);
                    if (true) {
                        // 数据没变化
                        console.log('数据没有变化');


                        console.log('data', data);
                        res.write(`event: abc\ndata: {"data": ${data}}\n\n`);

                        setTimeout(readData, 500);
                    } else {
                        console.log('数据有变，里面发送');
                        resolve(data);
                    }
                }
            });


            // res.end(resData);


        }
    }

} ).listen(9999);