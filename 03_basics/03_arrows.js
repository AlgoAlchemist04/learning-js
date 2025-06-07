const user={
    username:"aniket",
    price:999,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this) //here this referes to the function itself
    }
}

//user.welcomeMsg()
user.username="sam"
user.welcomeMsg()


console.log(this)  //this referes to empty object


function printUser(){
let username="Aniket"
//console.log(this)
//console.log(this.username) //"this" is only used in objects //output is undefined
}

printUser()



//
// const printMsg= function(){
//     let msg="hello everyone"
//     console.log(this.msg)
// }

// printMsg()

//arrow function

const printMSG= () =>{
let usermsg="hello, Aniket"
console.log(usermsg.usermsg)  //this doesnt work in arrow function also
}
printMSG()




//###############++++++++++++++++++++++

const addThree=(num1,num2,num3)=>{
    return num1+num2+num3
}
console.log(addThree(11,22,33))

//arrow function but implicit return so we dont have to use curly braces

const multiplyTwo=(num1, num2)=> num1*num2;
// no need to write return keyword
console.log(multiplyTwo(7,8))

//only use return keyword if we have curly braces with us
//like in the example of addThree function


//to return object

const retObj=()=>({username:"aniket"})  //to print obj use ( obj )= ({})
//const retObj=()=>{username: "aniket"} //this will return undefined 

console.log(retObj())

