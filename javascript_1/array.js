//array 배열 자료 구조 중 하나 
//다른 언어 같은 경우 같은 종류의 type 의 object 만 담을 수 있다. 
// 자바스크립트는 다른 type 의 자료를 보관할수 있지만
// 되도록이면 같은 종류의 type의 object 를 보관 하도록 한다.

'use strict';

// 1. Array🐶

//배열의 선언 방법 Decleartion

const arr1 = new Array();
const arr2 = [1,2];

//2. Index position 인덱스를 통한 접근

const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
//배열의 제일 마지막 index
console.log(fruits.length - 1);

//배열 출력
for(const value of fruits){
    console.log(value);
}


fruits.forEach(function(furit,idx,array){
    //2번 출력 된다 왜냐면 안에 인자가 2개가 있어서 사과 바나나
    console.clear();
    console.log('he');
    console.log(furit)
    console.log(idx);
    console.log(array);
});
//이름 없는 함수의 경우 arrow 를 쓸수 있다

fruits.forEach((value,idx,array) => {
    console.log(value,idx,array);
});

//딱 한줄로 사용 할수도 있음
fruits.forEach((value,idx,array) => console.log(value,idx,array));



//4.Addtion, deletion , copy 배열을 추가 하거나 지우거나 복사하는법

//push

fruits.push('🍒','🍑');
console.log(fruits);

//pop  배열 하나 뺴기
fruits.pop();
fruits.pop();
console.log(fruits);



//unshift 앞에서 배열 추가하기
//수박 레몬 순
fruits.unshift('🍉','🍋');
console.log(fruits);


//shift 앞에서 부터 배열이 빠진다;
// 수박부터 빠짐
fruits.shift();
console.log(fruits);


// 중요 알고 가야할것
// shift 와 unshitf 는 pop 과 push 보다 매우 매우 느리다.
// 배열의 뒤로 가는건 빈공간으로 가는거지만
//앞으로 데이터 를 추가하는건 기존에 있는 값들을 한칸씩 뒤로 간다음 넣는거라 느리다  빅데이터 알고리즘 에 대해 공부하면 깊게 알수 있음



//splice

fruits.push('🥦','🥝','🍓');
console.log(fruits);

//fruits.splice(어디서부터 자르고 싶은 idx , 어디까지 자를껀지의 idx 이고 설명에 ? 가 붙어 있는건 선언을 해도 되고 안해도 된다); 
//fruits.splice(1);
//console.log(fruits);
//지정 안하면 내가 지정한 idx 이후부터 다 지워 버린다
fruits.splice(1,1);
console.log(fruits);

//이렇게 하면 데이터를 지우면서 지운 자리에 데이터를 추가도 할수 있다;
fruits.splice(1,2, '🥑','🍇');
console.log(fruits);

//combine two array 두가지 배열도 묶어서 할수 있다.
//concat

const fruist2 = ['🥯','🫕'];

//기존에 있던 배열에 concat 이라는 함수를 이용하여 새로만든 fruit2 배열을 합칠수있다;
const newfruis = fruits.concat(fruist2);
console.log(newfruis);



//5.Searching 검사
//  배열안에 어떤값이 몇번째 idx 에 있는지 확인할때 유용하다

// indexOf

console.clear();
console.log(fruits);
//배열 안에 사과 없으면 -1 로 출력이됨
console.log(fruits.indexOf('🍎'));
//포도가 배열에 들어있고 idx 값이 2라는 것을 호출
console.log(fruits.indexOf('🍇'));

//includes

//포도가 배열안에 있고 있으면 불리언 값인 true 를 반환 해준다
console.log(fruits.includes('🍇'));
//수박이 배열에 없고 없으면 불리언 값인 flase 를 반환 한다
console.log(fruits.includes('🍉'));


// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('🍋');
console.log(fruits);
console.log(fruits.indexOf('🍋'));
// 만약 같은 값의 가진 값을 마지막에 추가하여 indexOf 를 사용하면
// 같은 값을 가진 값이 idx 값이 0 이라서 마지막에 추가한 같은 값의 idx 가 안나오고 첫번째로 있는 idx 0 번이 출력 된다;



//lastIndexOf 는 같은 값을 가진 마지막 값의 idx 를 출력한다
console.log(fruits.lastIndexOf('🍋'));
console.log(fruits);
