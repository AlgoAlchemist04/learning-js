// //promise is an object

// const promiseOne=new Promise(function(resolve, reject){
// setTimeout(function(){
//     resolve()
//     console.log('async take is complete')
// })
// },1000);

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("async 2 task is complete")
//     resolve()
    
// },2000)
// }).then(function(){
//     console.log("async 2 has been resolved")
// })

const promiseTwo=new Promise(function(resolve,reject){
    let error=false;
    if (!error) {
        resolve({username:"aniket", password:"123"})
    }else{
        reject('something wrong')
    }
console.log("two promise is complete")

})
promiseTwo.then((user)=>{
console.log(user.username)

}).catch(function(err){
console.log(err);

}).finally(()=>{
    console.log("promise is either resolved or rejected")
})



const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(
        function(){let error=true;
    if(!error){
resolve({name:"varad", age:21})
    }else{
        reject("error in varad block")
    }
})},1000)

async function consumePromiseFive(){   //another way of handeling error rather than resolve reject then catch
    try{
        const response= await PromiseFive;
    console.log(response);
    }catch (error){
console.log(error);
    }
    
}
consumePromiseFive()

fetch('https://api.github.com/users/AlgoAlchemist04')
.then((response)=>{
    
return response.json()
}).then((data)=>{
    console.log(data);
}).catch((e)=>{console.log(e)})

