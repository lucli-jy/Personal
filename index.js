var express = require('express'); // 설치한 express module을 불러와 변수(express)에 담음 
var app = express(); // express를 실행하여 app object를 초기화 

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
    res.send('Hello World!'); // 'Hello World!'를 보냄
});

var port = 3000; // 사용할 포트 번호를 port 변수에 입력 

app.listen(port, function() { // port 변수를 이용하여 3000번 포트에 node.js 서버를 연결
    console.log('server on! https://localhost:' + port); // 서버가 실행되면 콘솔창에 log를 남김 (= Event Listener)
});


// app.HTTP_Method_중_하나('Route_주소', 콜백_함수, 콜백_함수_, ...)
// 콜백 함수에는 req, res, next의 parameter들이 자동으로 전달됨 

// req : request에 관련된 값들과 함수들이 저장되어 있는 object. HTTP request header, 요청 url, cookies, query, body 등의 정보가 저장되어 있음
// 이 object의 전체 구조를 확인하고 싶을 때는 콜백 함수에 console.log(req) 코드로 확인 가능 (req 뿐만 아니라 res, next 등도 가능)

// res : response에 관련된 값들과 함수들이 저장되어 있는 object. HTTP response header, cookes, HTTP code 등의 정보를 확인하고 값을 변경할 수도 있음
// 또한 어떠한 방식으로 response할지도 정할 수 있다. 위 코드는 res.send를 활용하여 텍스트를 response 함 

// next : 만약 여러 콜백 함수를 사용한다면 next를 호출하여 다음 콜백 함수로 넘어갈 수 있음