const http = require('http'); //import http from 'http'와 같음

const host = 'localhost'; //localhost -> 127.0.0.1 -> look back -> 서버를 실행한 컴퓨터
const port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'test/html'});
    res.end('<h1>Hello World</h1>');
});

server.listen(port, host, ()=>{
    console.log('server running on http://localhost:3000');
});