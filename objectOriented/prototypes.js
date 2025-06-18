let myName="    Aniket     a      "
//its length is 13 btw
//console.log(myName.trim().length);
const myobj1={
    name:"varad",
    age:21,
    ismarried:false,
}
String.prototype.truelength=function(){

return this.trim().length;
}

Object.prototype.myboss=function(){
    console.log("your fellow is present everywhere")
}
console.log(myName.truelength())


myName.myboss()
console.log(typeof myobj1);
myobj1.myboss()
