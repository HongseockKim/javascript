'use strict';
//promise  는 자바스크립트 안에 내장되어있는 오브젝트

//비동기식 수행 할떄 콜백 함수 대신에 쓸수 있는 오브젝트

//promise

// state : pending - > fulflled or rejected
//producer vs Consumer

//producer

// 중요 사용자가 클릭하거나 사용자가 원하지 않았는데
// promise 를 만드는 순간 콜백 함수가 바로 실행된다 유의 하여야한다
// 불필요한 네트워크 통신을 하게된다

//새로운 promise 가 만들어질떄는 우리가 전달한 excutor 라는 함수가 자동적으로 실행된다 유의할것

//resolve 를 이용한 비동기 promise
const promise = new Promise((resolve,rejcet) =>{
    //doing some heavy work 무거운 헤비 한 일들을 한다 파일을 읽고 
    //데이터 를 읽어오는 일들 네트워크 또는 파일을 읽어 오는것들
    console.log('doing something');
    setTimeout(()=> {
        resolve('hong');//내장함수
    },2000);
});

//2. Consumers : then , catch, finally

// then 값이  정상적으로 수행이 된 다면 된 
promise.then((value) => {
    console.log(value);
});

//에러
const promise_type_2 =new Promise((resolve,rejcet) =>{
    setTimeout(()=> {
        //reject 는 주로 에러를 나타날때 씀 ajax succes 랑 error 랑 비슷한 느낌 인듯 
        rejcet(new Error('no network'));
    },2000);
});

promise_type_2
//성공시
.then((value) =>{
    console.log(value);
})
//에러시
.catch(error => {
    console.log(error);
})
//finally 는 최근에 추가 된것이고 성공가 에러 상관 없이 무조건 마지막에 호출되어 진다
.finally(() => {
    console.log('finally');
});





//promise chaining promise 연결

const fetchNumber = new Promise((resolve,rejcet) => {
    setTimeout(() => resolve(1),1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num =>{
    return new Promise((resolve,rejcet) => {
        setTimeout(()=> resolve(num - 1),1000)
    })
})
.then(num => console.log(num));


//Error Handling

const getHen = () =>
new Promise((resolve,rejcet) => {
    setTimeout(() => {
        resolve('성공');
    },1000)
});
const getDan = hen =>
new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`${hen} => 이게모야`)
    },1000);
});

const cook = egg =>
new Promise((resolve,reject) => {
    setTimeout(() => resolve(`${egg} => 이건또 모야`),1000);
});

getHen()
.then(heb => getDan(heb))
.catch(error => {
    //중간에 실패시 
    return '에러대체';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log());//에러 핸들링

// 하나를 호출하는 경우
/*
.getHen()
.then(getDan)
.then(cook)
.then(console,log)

이런식으로 파라미터 를 생략 가능하다

*/