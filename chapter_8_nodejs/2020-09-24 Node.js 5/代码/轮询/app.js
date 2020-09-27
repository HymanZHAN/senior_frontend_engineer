const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {

    let url = req.url;

    res.setHeader('content-type', 'text/html;charset=utf-8');

    if (req.url === '/') {
        res.end( fs.readFileSync('./index.html') );
    } else {
        if (req.url === '/getData') {
            let data = [
                {id: 1, title: '标题一'},
                {id: 2, title: '标题二'},
                {id: 3, title: '标题三'},
                {id: 4, title: '标题四'},
                {id: 5, title: '标题五'},
            ];
            res.end(JSON.stringify(data));
        }
    }

} ).listen(9999);