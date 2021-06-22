//  1. String concatenation 
console.log('my'+ 'cat');
console.log('1' + 2);
//숫자는 숫재대로 계산해주고 문자는 문자대로 출력되는 이점
console.log(`이게 문자식 1 + 2 =  ${1 + 2}`);
//2.
//2의 3승 표현
console.log(2 ** 3);

//3
const counter = 2;
//const up = counter++;
// 위 up 이랑
up = counter;
//이거랑같다;

//const outputUp = counter++;
//이건 기존에 2의 값이 대입되있는걸 먼저 내보낸후 그다음 증가;

//4. 연산자 
let x = 3;
let y = 6;
x += y; // x = x + y 라는 말과 같다;
x -= y;//위와 동일;
x *= y;
x /= y;

// || or , && and, ! not 
//ex) if(value != null) 벨류가 널이 아닐때 

console.log(0 == false)//true
console.log(0 === false)//false
console.log('' == false)//true
console.log('' === false)//false
console.log(null == undefined)//true
console.log(null === undefined)//false


var names = 'hongseock';

//if 문 줄이기

console.log(names === 'red' ? 'yes' : 'no');

//case 문
const browser = 'IE';
switch (browser) {
    case "IE":
        console.log('IE');
        break;
    case "kr":
    console.log('kr');
    break;
}


// while

let i = 3;
while ( i > 0){
    console.log(`while : ${i}`);
    i--;
    //i 가 0 보다 클때까지 무한으로 실행; 조건에 맞을떄까지;
    //이건 조건 부터 실행함
}

do {
    //이건 콘솔 부터 실행후 그다음 조건 비교;
    //위에서 i 가 0 이기 때문에 콘솔로그 실행후 종료;
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

for(i=0; i< 10; i++){
    console.log(i);
    if(i == 5){
        console.log(i);
        //continue 로 종료 할수 있다.
        // 또는 break 로도 종료 할수 있다.
        continue;
    }
}