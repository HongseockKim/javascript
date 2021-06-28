'use strict';

//비동기 프로그램 콜백에 대해서

//동기 와 비동기 
//javascript is synchronous 자바스크립트는 동기적인 언어다
//hoisting 이 된 후부터 동기적으로 하나하나씩 실행

//hoisting : var function decleration 선언들이 제일 위로 올라가는게 hoisting 순선대로 
console.log(1);
console.log(2);
console.log(3);

//콜백함수 란 우리가 전달해준 함수를 나중에 다시 불러오는함수를 콜백 함수라고 한다
//browser api  seTimeout
setTimeout(() => console.log(4),1000);

//Synchronous callback 동기식 콜백함수
function printImmediately(print){
    print();
}

printImmediately(() => console.log('hi'));


//Asynchronous callback 비동기 콜백함수
//쉽게 말해
//브라우저가 준비되면 바로 실행되는 함수 들은 동기
// 뒤늦게 실행되는 함수들을 비동기

function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}

printWithDelay(() => console.log('async callback'),2000);

//콜백을 왜 많이 쓰면 안되는지에 대한 ex) 
//겁나 헷갈림 
//1. 가독성이 떨어진다
//2. 에러가 발생 또는 디버깅 할때도 찾기가 힘들다.
//3. 유지보수도 어렵다

class userStorage{
    loginUser(id,password,onsucces,onerror){
        setTimeout(() => {
            if(
                (id === "hong" && password == "seck") ||
                (id === "coder" && password === "man")
            ){
                onsucces(id);
            }else{
                onerror(new Error('not found'));
            }
        },2000);
    }

    getRoles(user,onsuccess,onerror){
        setTimeout(() => {
            if(user ==="hong"){
                onsuccess({name : 'hong',role: 'admin'});
            }else{
                onerror(new Error('no access'));
            }
        },1000);
    }
}


const userstorage = new userStorage();
const id = prompt('enter your id');
const padssword = prompt('enter your password');
//UserStorage 안에 있는 loginUser 메소드 이용
userstorage.loginUser(id,padssword,(user) => {
    userstorage.getRoles(user,(userwithRole)=>{
        alert(`hi! ${userwithRole.name} end ${userwithRole.role}`);
    }, (error) =>{
        console.log(error);
    });
},(error) => {
    console.log(error);
})