'use strict';

class userStorage{
    loginUser(id,password){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(
                    (id === "hong" && password == "seck") ||
                    (id === "coder" && password === "man")
                ){
                    resolve(id)

                }else{

                    reject(new Error('not found'));

                }
            },2000);
        })
        
    }

    getRoles(user){
        return new Promise((resolve,reject) => {

            setTimeout(() => {

                if(user ==="hong"){

                    resolve({name : 'hong',role: 'admin'});

                }else{

                    reject(new Error('no access'));

                }
            },1000);
        });
        
    }
}


const userstorage = new userStorage();
const id = prompt('enter your id');//prompt 로 쓴 value 가 id 에 대입
const padssword = prompt('enter your password');//promt 로 쓴 value 가 padssword 에 대입

userstorage.loginUser(id,padssword)// 위 class loginUser 메소드 파라미터 id,padssword 에 위 대입한 값 넣음
.then(user => userstorage.getRoles(user))//위 값을 return 받아서 위 class 안에있는 getRoles 메소드 에 대입
.then(user => alert(`hi! ${user.name} end ${user.role}`))//getRoles  메소드 명령에 따라 맞으면 출력
.catch(console.log);//에러면 케치


