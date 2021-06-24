'use strict'
//Object
//obj 객체
//obj { key : value};
const name = 'hongseck';
const age = 30;
print(name, age);

//내가 기존에 하던 방식 
// 이렇게 하면 관리 하기가 힘들어 져서
/*
function print(name,age){
    console.log(name);
    console.log(age);
}
*/


function prints(person){
    console.log(person.names);
    console.log(person.age);
}
const hongseck = {names: 'hong',age : 4}
prints(hongseck);

const obj1 = {}; //이렇게 만든걸 object literal 문법
const obj2 = new Object(); //이렇게 만든걸 objet constructor 문법

//자바스크립트 는 다이나믹 런타임 언어 이기 때문에

hongseck.hasjob = true;
console.log(hongseck.hasjob);
//이런식으로 obj 에 추가가 가능함 ;; 근데 차후 유지 보수할때 힘듬 당연히 중간에 갑자기 값이 넣어지니까


// 그리고 위에서는 추가 했지만 또 삭제도 가능하다 ...
delete hongseck.hasjob;
console.log(hongseck.hasjob);


//2. computed properties 계산된 속성

console.log(hongseck.name);
// 여기서는 string Type 으로 해야함
console.log(hongseck['name']);

// 여기서 이런식으로도 객체에 key value 를 생성해서 쓸수있다 ;;;;
hongseck['hasjob'] = '트루';
console.log(hongseck.hasjob);

//예제

function printValue(obj,key){
    //console.log(obj.key); // 키는 항상 string 이기에 닷 으로 하면 안나옴;
    console.log(obj[key]);
}


//3.Property valye shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};


//key 와 벨류만 생성해주는 함수
function makePerson(name,age){
    /* 이런 방법도 있지만
    return {
        name,
        age,
    };*/

    //class 처럼

    this.name = name;
    this.age = age;
    //결국 에는 this 를 return 하는 함수
}
const person4 = new makePerson('hong',30);
console.log(person4);



//5. 'in' operator  : property existence check (key in obj) 
// 인 오퍼레이터는 해당하는 obj 안에 key 가 있는지 없는지 확인 하는것

//name 이라는 Key 가 없어서 false
console.log('name' in hongseck);

//hasjob 이라는 key 가 있어서 true
console.log('hasjob' in hongseck);




//6. for ... in vs for ...of 
//이렇게  for 문을 hongseck 이라는 오브젝트에 key 들이라고 하면 
//hongseck 이라는 오브젝트에 있는 key 들을 다 받아온다

// ! 중요 위에 use strick  안쓰면 에러가 안나지만
// use strick  을쓰면 에러가남
// 밑에 key 같은 경우 정의 되지 않았기때문에 let const var 를 정의 해줘야한다
for(const key in hongseck){
    console.log(key);
}

//for(value of iterable)

const array = [1,2,3,4,5];

// 위 배열에 담긴걸 밑에 방식 대로 했는데
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//이렇게 해도 된다 !! 중요 !! 
//of 를 한번봤었는데 뭔지 몰랐는데 이런 신박한 기능이였다니 ..
for(const value of array){
    console.log(value);
}



// 7. Fun cloning 복사

const users = {name : 'hong', age : '20'};
const users2 = users;

users2.name = 'coder';
console.log(users);

//old 버전
const user3 = {};
for (const key in users){
    user3[key] = users[key];
}
console.log(user3);

//new 버전 
const user4 = {};
// Object.assign(taget , souce);
//이렇게 해도 위와 같이 user4 의 빈 객체에
// 복사해서 key value 를 넣는다;
Object.assign(user4,users);
console.log(user4);

// 저위에 코드를 줄이면
//이렇게 리턴된 값을 이용해서 짧게 쓸수 있다;
const user5 = Object.assign({},users);
console.log(user5);

// 더 더하면
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue',size : 'big'};
const mixed = Object.assign({},fruit1, fruit2);
// 여기 콘솔 color 는  제일 최신으로 쓴 덮어 쒸우기 때문에 
// blue 가 나온다 유의할것
console.log(mixed.color);
console.log(mixed.size);