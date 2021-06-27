//htttp

/*
Hypertext Transfer Protocal
    clienat request
    server -> response
*/

// fetch 는 IE 에서 작동을 안함

//1. object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json)

const rabbit = {
    name : 'toto',
    color : 'red',
    size : null,
    date : new Date(),
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name','color','size']);
console.log(json);

json = JSON.stringify(rabbit, (key,value) =>{
    console.log(`key : ${key}, value : ${value}`);
})
console.log(json);


//json to object parse(json)
console.clear();
const datas = {
    name : '27',
    color : 'blue',
    size : 288,
    date : new Date(),
    jump :() =>{
        console.log('점프점픔');
    },

};
console.log(datas);

let obj = JSON.stringify(datas);
obj = JSON.parse(obj, (k,v) => {
    console.log(`key : ${k}, value : ${v}`);

    return k === 'date' ? new Date(v) : v;
    // k 가 date 이면 새로운 new date() 오브젝트로 만들꺼고 아니면 그냥 v 값 쓰겠다 는 의미
});
console.log(obj);

console.log(datas.date.getDate());
//obj 데이타 안에 데이트를 이렇게 불러오면 오류 뜨는 이유는
//스트링 이기떄문
//console.log(obj.date.getDate());

console.log(obj.date.getDate());