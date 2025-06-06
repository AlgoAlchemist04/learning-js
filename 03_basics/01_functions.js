function SayMyName(){
    console.log("hello aniket")
}

SayMyName()

function add(num1, num2){
console.log(num1+num2)
}
add(3,22);


//to get a value to use it somewhere it needs to be returned

//heres how

function multiplyTwoNumbers(num1,num2){
    let multiply=num1*num2;
    return multiply
}
console.log("multiply numbers")
console.log(multiplyTwoNumbers(7,3))



function UserLoginMsg(name="defaultSOUL"){   //leaves a default name if user passes nothing onto parameter
return `${name} just logged in`
}

console.log(UserLoginMsg())



//to get unknown multiple inputs we use rest operators just like spread using ...

function printall(...num1){
    return num1
}

console.log(printall(2,3,4,5,6))

function printallexceptsome(val1,val2,...num1){
    return num1
}
console.log(printallexceptsome(1,2,3,4,5,6))  //initial values are being excluded as they are stored in val1 and val2



//function to handel objects

const tempObj={
    name:"panda",
    age:21,
    weight:72,
    isMarried:false
}

function getInfo(anyobject){
console.log(`name is ${anyobject.name} and age is ${anyobject.age}`)
}

getInfo(tempObj)