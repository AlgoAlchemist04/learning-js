let temp=51

if(temp >= 50){
console.log("temperature is too high")
}
else{
console.log("temp is less than 50")
}
console.log("always execute")

const balance=3;
if(balance <10) console.log("wake up bro");


console.log("checking multiple conditions")
const score=200;

if(score <300){
console.log("less than 300")
}
else if(score <500){  //remove else if we want to check this condition after executing case 1 of upper case
console.log("less than 500")
}
else if(score <700){
console.log("less than 700")
}
else{
    console.log("greater")
}