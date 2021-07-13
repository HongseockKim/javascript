'use strict';
//1. 배열을 문자열로 변환
const array1 = ['string','spuer','object'];
const array1_type = [1,2,3];
const result = array1.join();
const result_type_2 = array1.join('is');//파라미터 값의 구분자를 추가해서 넣을수 있음
const result_type_3 = array1_type.join('end');
console.log(result);
console.log(result_type_2);
console.log(result_type_3);

//주어지는 문자값을 배열로 만들기
const texts = 'mom,naver,google';
const resultText = texts.split(',');
console.log(resultText);

//배열을 거꾸로 출력하기
const numArray = [1,2,3,4,5];
const resultNum = numArray.reverse();
console.log(resultNum);

//배열 값을 1 번째 2번째 를 제외한 나머지 값 출력

const array_2 = ['name','age','score','super','rows'];
const result_type_4 = array_2.splice(0,2);
const result_type_5 = array_2.slice(2,5);///여기서 마지막 5 는 4로 하면 rows 라는 배열을 값을 배제하기 때문에 5까지
console.log(result_type_4);
console.log(array_2);
console.log(result_type_5);

//배열 중 75 인 애 찾기

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  //학생들중 90점인 아이 호출
const resultArray = students.find(function(vlaue){
    //console.log(vlaue);
    //console.log(idx);

    return vlaue.score === 90;

});
console.log(resultArray);
//이렇게 줄일수 있고
//find 는 리턴 시킨 애가 첫번째로 true 인 애가 나오면 중단한다;
const resultArraytype_1 = students.find((value) => value.age === 40);
console.log(resultArraytype_1);


//특정 값이 트루인 애들만 모아서 배열로 담기

const result_type_6 = students.filter((val) => val.enrolled);
console.log(result_type_6);



//학생들중 점수만 출력하기

const result_type_7 = students.map((vals) => vals.score);
console.log(result_type_7);

//학생들의 점수를 2배씩 곱하기

const result_type_8 = students.map((upval) => upval.score * 2);
console.log(result_type_8);

//학생들중에 점수가 50점 보다 작은 애가 있는지 확인
//some api
const result_type_9 = students.some((student) => student.score < 50);
console.log(result_type_9);//있으면 true 로 나온다

//every api
//학생들 전부다 점수가 50점 보다 작은지 아닌지
const result_type_10 = students.every((student) => student.score < 50);
console.log(result_type_10);

//다른방법
const result_type_11 = !students.every((student) => student.score >= 50);
console.log(result_type_11);


//학생들의 평균 점수 구하기
//이거 다시 해보기
const result_type_12 = students.reduce((prev,curr) => {

    //reduce 는 무언가 값을 누적할때 씀
    //prev 인자값은 이전의 콜백함수에서 리턴된 값이 전달되고
    //curr 은 배열의 아이템을 순차적으로 전달 받는다;

    console.log(prev);
    console.log(curr);
    return prev + curr.score;
}, 0);
console.log(result_type_12);


//배열의 뒤에서 reduce 해보기

const result_type_13 = students.reduceRight((prev,curr) => {
    console.log('거꾸로--------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
},0);//여기서 0 은 시작하는 idx 번호
console.log(result_type_13);

//평균
console.log(result_type_13 / students.length);


//학생들의 모든 점수를 문자열로 바꾸기

const string = students.map((students) => students.score).join();
console.log(string);




//이런식으로 도 사용가능 ;;;
const stringType2 = students
.map((val) => val.score)
.filter((score) => score >=50) //학생들 중 50점보다 큰 아이들;
.join();
console.log(stringType2);


//학생들중 점수를 낮은 순으로 정렬

const result_type_14 =students.map((score) => score.score )
.sort((a,b)=> a - b)
.join();
console.log(result_type_14);

//학생들 점수를 높은거에서 낮은순으로

const result_type_15 = students.map((student) => student.score)
.sort((a,b) => b -a)
.join();
console.log(result_type_15);





class test_1{
    constructor(test1,test2,test3,test4){
        this.test1 = test1;
        this.test2 = test2;
        this.test3 = test3;
        this.test4 = test4;
    }
}

const testarray = [
    new test_1('a', 22 , true , 44),
    new test_1('b', 33 , false , 55),
    new test_1('c', 34 , false , 55),
    new test_1('d', 35 , true , 105),
]

const resultsss = testarray.find(function(vals){
    
    console.log(vals.test1);
})

const num = testarray.map((num1) => num1.test2)
.join()
console.log(num);