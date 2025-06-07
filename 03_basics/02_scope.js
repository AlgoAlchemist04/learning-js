let a=5;
const b=3;
var c=10;

if(1){
let a=2;  //its scope is this if loop and outside it doesnt affect any thing and same with const
const b=4;
var c=6;  //it affects the outer(global) value despite of being in a local scope

console.log("inner value of a is  ",a)
}

console.log(a);
console.log(b);
console.log(c);          //these should prin 5,   3,   and 10  but it due to var it changed the value of c
// thats the reason we dont use var anymore...


//Nested scopes

if(true){
const name="aniket"
if(name==="aniket"){
const nickname="nurtino"
console.log(name, nickname)

}
//console.log(nickname)   //cant access local scope variable outside it which is nickname in this case
}
//console.log(name)  //cant access name as its scope is over


console.log(addOne(10))    //value of function can be accessed before declaration
function addOne(num){
return num+1
}

//value of this type of declartion function cannot be accesed before initialization 
//console.log(addTwo(8))          //this cant be printed as it is not declared to print this call the function after declaration
const addTwo=function(num){
    return num+2
}

//here we can call the function to get the output of that function i.e addTwo

console.log(addTwo(5))
