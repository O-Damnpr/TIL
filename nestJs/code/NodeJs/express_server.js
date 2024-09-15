const express = require ('express'); //express 불러오기

const app = express(); //냅다 익스프레스 실행시키기 이제 엔드포인트 붙일 수 이씀

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1>');
});

app.get('/user', (req, res) => {
    res.send('<h1> User Page </h1>');
});

app.get('/post', (req, res) => {
    res.send('<h1> get Post </h1>');
});

app.use((req, res)=>{
    res.status(404).send('<h1> 404 Not Found </h1>')
});

app.listen(3000, ()=>{
    console.log('server running on http://localhost:3000')
});