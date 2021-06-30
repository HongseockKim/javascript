// async & await
// 깔끔한 promise 단 절대적이지 아니다.

//1. async 사용법

function fetchUser(){
    return new Promise((resolve,reject) => {
            resolve('hongseck');
    });
}
const user = fetchUser();
user.then(console.log);
//console.log(user);

//async 

async function asyncrequest(){
    return "hong";
}
const users = asyncrequest();
user.then(console.log);

//2. await
// await 은 async 키워드가 붙은 함수 안에서 만 사용 가능하다

//ex

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getName(){
    await delay(3000);//await  딜레이 함수 가 끝날때까지 기달렸다가
   // throw 'eroor';// 에러 발생하면
    return "hongseckkim";// hongseckim 을 호출
}

async function getCity(){
    await delay(3000);
    //throw 'error'
    return "seoul";
}

//좋치 않은 예
function pickFunction(){
    //getname 함수를 then  하고 name 파라미터에 담는다
    return getName().then(name =>{//name 함수에 담아지면 getcity  함수를 위와 같이 실행
        return getCity().then(city =>`${name} 과 ${city}`); //끝나면 각각 담겨진 파라미터를 pick함수에 담고
    });
}

pickFunction().then(console.log);//pick 함수에서 일이 끝나면 log로 출력


//좋은 예
async function newgetFuction(){
    const namePromise = getName();//이렇게 하는 이유는 getname 과 getcity 를 3초 3초 해서 6초에 걸쳐서 출력하게되니
    const cityPromise = getCity();//각각 3초 후에 출력하는 값을 각 변수에 담아서
// 밑에 코드로 대입 하면 3초에 두개의 값이 병렬로 실행된다 
    const name = await namePromise;
    const city = await cityPromise;

    
    
    return `${name} 과 ${city}`;
}

newgetFuction().then(console.log);


//3. useful Promise APIs

function pickAllfunction(){
    return Promise.all([getCity(),getName()])
    .then(value => value.join('+'));
    //all 전부다 출력한다
}

pickAllfunction().then(console.log);




function pickonlyone(){
    return Promise.race([getCity(),getCity()])
    //race api 두개의 함수중 가장 먼저 출력되는걸 출력한다
}
pickonlyone().then(console.log);





// 함수 사용법
/*
함수 선언
함수 호출
*/

//함수선언
function somtihg(add){
    console.log(add);
    
    const result = add(3,3);
    console.log(result);
}
//함수 호출
somtihg(add);
//여기서 중요
/*
    somting 함수 인자 값에 add  라는 함수를 넣을때 밑에처럼 add() 호출 해버리면
    somting 이 실행되기전에 먼저 add 함수가실행 된다 ;;
    이거 몰랐다 ...
    !!!!!!!!함수를 전달 할때는 함수의 이름만 전달하면 된다!!!!!!!
*/
//somtihg(add())







//리턴 함수!!!
function add(a,b){
    const sum = a + b;
    return sum
}

//함수에서 return 을 해도 밑에처럼 함수 호출을 해도 아무일도 안일어난다
//add(2,3);

//const result = add(2,3);
//console.log(result);


//함수 호출
// function(subfunction)

