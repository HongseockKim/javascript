const fetch = require("node-fetch");
let url = 'https://learnwebcode.github.io/json-example/animals-1.json';
function tet(){
     fetch(url)
     //url 패치
     .then(res => res.json())
     //그리고 res 펑션 결과를 json 으로 
     .then(resJson => console.log(resJson[0].name));
     //그리고 resjson 함수 log
}

tet();