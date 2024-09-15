const http = require('http'); //import http from 'http'와 같음
const url = require('url'); //path에 따라 다른 요청을 받기 위해 요청에서 path를 추출 가능한 url 패키지

const host = 'localhost'; //localhost -> 127.0.0.1 -> look back -> 서버를 실행한 컴퓨터
const port = 3000;

const server = http.createServer((req, res)=>{
    const path = url.parse(req.url).pathname;
    if(path === '/'){
        res.writeHead(200, {'ContentType' : 'test/html'});
        res.end('<h1> home! </h1>')
    } else if (path === '/post'){
        res.writeHead(200, {'ContentType':'test/html'});
        res.end('<h1> post page! </h1>')
    } else if (path === '/user'){
        res.writeHead(200, {'ContentType':'test/html'});
        res.end('<h1> user page! </h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'test/html'});
        res.end('<h1>Page NotFound</h1>');
    }
});

server.listen(port, host, ()=>{
    console.log('server running on http://localhost:3000');
});