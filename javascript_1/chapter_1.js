'use strict';
/*
use strict 쓰고 하는게 좋다
이유는 구문 오류를 잡아준다
*/ 
console.log('hellow javascript');
const button = document.querySelector('button');
button.onclick = function(){
    const name = prompt('너의 이름이 무엇이냐');
    alert('안녕'+name+' 화이팅하자');
}