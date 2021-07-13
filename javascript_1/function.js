"use strict";

//function 이란

//function name(paramiter_1,paramiter_2) {body .... return;}
//중요한점은 하나의 함수에는 하나의 일만 하도록 하게해야함;
//함수 는 무언가 동작 하는 거기때문에 이름 은 동사형으로 해야한다.
//ex createCardandPoint -> createCard , creatPoint 이런식으로 나눌줄 알아야한다
//명명 규칙 중요!!!;
// javascript 는 function 이 object 로 인식 된다;

function printHello(){
    console.log('Hello');

}
printHello();

//파라미터를 활용한 함수

function log(message){
    console.log(message);
    return;
}
log('hello_@');

//2.파라미터
function chageName(obj){
    // chageName 함수 의 파라미터 obj  에 naem 은 coder
    obj.name = 'coder';
}
// hongseck 이라는 객체 네임 은 레드스톤
const hongseck = {name : 'redstone'};

//여기서 chageName 함수에 hongseck이라는 변수 를 담으면
chageName(hongseck);

//redstone이라는 결과값이 output 됨
console.log(hongseck);


//3.Default parameters

function showMessage(parm_1,parm_2 = 'unknow'){
    // 파라미터 옆에 = 'unknow' 이면
    //두번째 파라미터 값에 할당이 되지 않으면 unknow 이라고 디폴트값을 넣는다 !!!
    console.log(`${parm_1} by ${parm_2}`);
}

//두번째 파라미터 parm_2 은 undefind 가 나옴
showMessage('안녕');

// 4. Rest parameters (added in es6)


// 여기서 ...args 는 args 배열 형태로 3개의 배열형태로 있는거다
//각각 파라미터 를 3개 안만들어도 args 에 3개의 배열이 만들어진것!!!

function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
//  또다른 for 문 ...
    for(const arg of args){

        console.log(arg);
    }
    
    //또다른 forEach 함수 형 => 펑션과 같음;
    args.forEach((arg) => console.log(arg));
}



//여기서 위에 있는 3개의 배열 파라미터에 값을 넣어서 출력
printAll('안녕','이게','모야');

//6. return value


// 내가 제일 궁금해 했던거

// return 이 안써져 있는 함수는
// 함수 안에 return 이 숨어져 있는거랑 똑같다고 보면된다;
function sum ( a, b){
    return a + b;
}
const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);

//나쁜예

function upgradeUser(user){
    if(user.point > 10){
        //logic
    }
}

//좋은 예
function upgradeUser(user){
    if(user.point <= 10){
        //조건이 맞지 않을때는 빨리 리턴하고  바로 빨리 리턴 시키는게
        // 좋은 함수 명령어 이다
        return;
    }
    //logic
}


// 함수 활용

//이런 함수를 무명 함수  또는 익명 함수라고 부른다;
const print = function(){
    console.log('프린트');
}

//여기서 한번 호출되고
print();

//prinAgain 변수에 함수가 담긴 print 를 담으면
const printAgain = print;

//여기서도 위에 쓴 함수를 쓸쑤 있다;
printAgain();

//예 이름이 있는 함수도 변수 에 담아서 재활용 가능 !!
const sumAgain = sum;
console.log(sumAgain(1,5));

// 여기서 알아야 하는건

/*
    이름이 있는 함수는 위치 에 상관없이 선언한 부분부터 실행할수 있는 반면
    무명 함수 또는 익명 함수는 선언한 다음부터 사용할수 있다 !
*/


//대망의 callback 함수

function randomQuiz(anwer,printYes,printNo){
    if(anwer === "wow"){
        printYes();
    }else{
        printNo();
    }
}
//무명 함수
const printYes = function(){
    console.log('yes');
}
const printNo = function(){
    console.log('no');
}

//문제
randomQuiz('sssW',printYes,printNo);
randomQuiz('wow',printYes,printNo);



//7. Arrow 함수!!!

const arrow = () => console.log('arrow!!!');
const arrowAgain = (a,b) => a + b;

arrowAgain(3,1)
console.log(`${arrowAgain(3,1)}`);

// 함수 안에서 해야할일이 많다면

const arrowFunctin = () => {

    console.log('이렇게 하면 된다');
    return 
    // 근데 이렇게 쓰면 return 을 써줘야한다
}


// 바로 함수 실행하는법

/*
    jquery 에서는 $(function){}
    을 사용했지만 자바스크립트에서는
*/
//꼭 알아 둘것 ... 신기방기 ..
(function wow(){
    console.log('이런 함수를 IIFE 라고 부르며 immediately Invoked Function Expression 의 약자')
}) ();