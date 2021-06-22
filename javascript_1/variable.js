'use strict';
// 2.Variable
//let (ES6 부터 추가된거다);
//ES6 이전 자바스크립트는 잘 쓰지 않는다. 
Code();

function Code(){
    let globalNams = '전역변수';
{
    let names = "홍석";cd
    console.log(names);
    names = "김홍석";
    console.log(names);
    console.log(globalNams);
}

//var 쓰지말래요 ... 
/*쓰지 말라는 이유 */

/* var 는 읽기 와 쓰기가 가능하다는 장점? 이 있다 */

/*단 const 는 읽기만 가능하다 다시 다른값으로 쓰는걸 못한다. */
console.log(age);
age = 4;
var age;
/*이게 말이 안되는 이유 변수는 설정 되있지만 값이 안들어있음
undifne뜸
2.
또 쓰면 안되는 이유 { } 블록스콥 (block scope)이 안됨 지역 전역 이 정확하지 않음;

3.
단 IE 이는 let 을  인식못함 ....
es5 는 지원함
*/

//3.Const 란
//Const 는 한번 정의하면 값을 바꿀수 없다;

/*
    Mutable 변경 될수 있다.
    Immutable 변경 될수 없다.
    Mutable type 의 let 과 Immutable const 
*/
const test = 5;
const test2 = 6;
console.log(test);
//console.log(test);//값이 바뀌지 않음;

/*변수의 종류 Varible Type*/

const count = 18;
const size = 17.5;
console.log(`value:${count},type :${typeof count}`);
console.log(`value : ${size}, type:${typeof size}`);

const infinity = 1 / 0;//무한의 값
const negativeInfinity = -1 / 0; // -의 무한값;
//무언가 if 조건으로 활용시? 괜찮을것 같음;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

/*BigInt*/
const bigInt = 1231231231231231313123123123123123123n;//n을 추가한다
console.log(`value : ${bigInt} type : ${typeof bigInt}`);
//빅 인트라고 나옴 
Number.MAX_SAFE_INTEGER;

//string 문자 값
const char = "C";
const hong = "hongseock";
const say = "hello" + hong;
console.log(`value:${say} type : ${typeof say}`);
const hellos = `hi ${hong}`;
console.log(`value : ${hellos} type : ${typeof hellos}`);

/*boolean 값*/
//flase : 0 , null, undefined, NaN,'' 빈값
//true : 1 나머지

//null
let notting = null;
//null 은 내가 빈값으로 넣은 것;
//undefined
//undefined 는 변수는 정의되있지만 값이 비어있다

//symbol 
//symbol 도 스트링인데 고유한 값으로 만들어줌
//스트링이 아님
const symbol_1 = Symbol('id');
const symbol_2 = Symbol('id');
const symbol_3 = Symbol.for('id');
const symbol_4 = Symbol.for('id');

console.log(symbol_1 === symbol_2);
//다르다고 나옴
console.log(symbol_3 === symbol_4);
//symbol for 라고 붙이면 동일한 심볼이됨.

console.log(`value : ${symbol_1.description} type: ${symbol_1.description}`);
//description 이라고 붙여줘야 스트링값으로 변화되서 log 가 읽어진다;

//자바스크립트는 다이나믹 타입 랭귀지이다
let texts = '7' + 5;//문자열과 넘버 타입을 더하면
console.log(`value ; ${texts} type : ${typeof texts}`);
//로그 기록과 같이 스트링으로 변화시킨다;
let textss = '8' / '2'; //스트링과 스트링을 나눈다?
console.log(`value ; ${textss} type : ${typeof textss}`);
//놀랍게도 문자 8을 문자 2로 나누어서 넘버 4 가 나온다 type 은 number 로 출력 ;;
let Div = document.querySelectorAll('div');
console.log(Div);

console.log(Div[0]);

//Object 오브젝트 객체 !
const DivZero = document.querySelectorAll('div');
const Obj = {name : '홍석',age : '30',tag : DivZero};
console.log(Obj);
console.log(Obj.name);
console.log(Obj.age);
console.log(Obj.tag);
console.log(Obj.tag[0]);
console.log(Obj.tag[1]);


Obj.age = "만 30세";
console.log(Obj.age);
//이렇게 변경 가능 ;;;ㄷㄷ;;
}
