'use strict';
//class : templete 클래스 는 템플릿이다 틀같은것
//object : instance of a class  오브젝트는 클래스 안에 넣는 데이터다 


//1. class declarations

class Person {
    //constructor 빌드
    constructor(name, age){
        //이름과 나이라는 fields 
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        //함수
        console.log(`${this.name}: sqy hello`);
    }
}
//이게 오브젝트
// 위에서 만든 클래스 변수에 오브젝트 를 만들어서 안에 데이터를 넣는다.
const hongseck = new Person('hong',30);
console.log(hongseck.name)
console.log(hongseck.age);
//메소드 실행
hongseck.speak();



//2. Getter and setters 게터 와 세터

class User {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){

        //리턴 받은 파라미터 값이 0보다 작으면 에러 출력
        //근데 이렇게 에러 내면 자바스크립트는 싱글스레드 이벤트 루프 방식이라
        // 밑에꺼 다 안됨 ;;


        /*if(value < 0){
            throw Error('-1값을 줬어')
        }*/
        //  벨류가 0보다 작으면 벨류는 0으로 넣어줌
        this._age = value < 0 ? 0 : value;
    }
}

//이렇게 사용자가 -1 로 설정 하여도 나이가 -1 이 말이 안되니까 
// 그걸 프라이빗으로 만들고 -1 로 사용자가 입력하여도 get 해서 다시 1로 
//새로운 유저를 만드로 실수로 나이를 -1로 설정하였다;; 가정
const user1 = new User('kim','hongseock',-1);


//3. Fields (public , private)
//최근에 추가 된거라 많은 개발자들이 사용하지 않는다.

class Experiment {
    publicFied = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFied);
console.log(experiment.privateField);


//4. Static properties and methods
// 이것도 최근에 나온 클래스

class Article{
    static publisher = 'hongseck';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher (){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
//Article 이라는 클래스 명을 붙여서 해야 출력이 됨.



//상속 과 다양성 
//class 에서 의 this 는 밑에 const 변수 에 파라미터 값들
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //메소드

    draw(){
        console.log(`드로잉 ${this.color}`);
    }

    getArea(){
        return this.width * this.height;

    }
}

//직사각형이라는 클래스 를 사용할떄 위에꺼를
//그대로 만들지 않고 extends 키워드를 사용해 재사용이 가능하다;
class Rectangle extends Shape{}
class triangle extends Shape{}


//위에서 도형과 삼각형인데
//삼각형은 밑변과 길이 만 알아도 면적을 구할수 있으니
// getArea 라는 메소드를 밑에처럼 다르게 해서 쓸수 도 있다!!;;
//이런 방식을 오버라이드 방식이라고 함
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height) / 2;
    }
}
// 이렇게 extentds 를 이용해서 재활용 이된다.
const rectangle = new Rectangle(100,200,'#fff');
rectangle.draw();
console.log(rectangle.getArea());
const angle = new triangle(20,20,'red');
angle.draw();



const updatetriangle = new Triangle(20,20,'blue');
console.log(updatetriangle.getArea());


// class checking instance

//변수 와 클래스를 instanceof 로 출력하면
// 불리언 값으로 트루 인지 아닌지 알려준다; instance 인지;
console.log(rectangel instanceof Rectangle);


addEventListener('click'함수실행)

함수실행(){
    return function (){
        이 안에 있는 코드를 바로 리턴 시킨다

    }
}




