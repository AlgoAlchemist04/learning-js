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