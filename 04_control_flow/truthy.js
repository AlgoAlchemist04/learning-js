const userEmail= "aniket@code.com"

if(userEmail){  //without even checking whether its true it printed the output
    console.log("Got the user email")
}
else{
console.log("Don't have user email")
}


//fasly values
//false, 0, -0, BigInt 0n, "" (empty string), null, undefined , NaN =>their default value is false

//truthy value
// "0", 'false', " ", [], {}, function(){}


const arr=[]
if(arr.length ===0){
    console.log("array is empty")
}

//checking for object

const emptyObj={}

console.log(Object.keys(emptyObj))  //it gives arrays of keys from object then check array length to check it its empty

if(Object.keys(emptyObj).length ===0){
console.log("Object is empty")
}


//Nullish Coalescing Operator (??):  null undefined

let val1;
//val1= 5 ?? 10 // it will assign first if both values exist

//val1= null ?? 10 //if other value is not defined or null the valid value will be assigned here it is 10 not undefined
//val1= undefined ?? 15 //same as upper case

val1= null ?? 10 ?? 15  //in this case first valid value will be assigned

console.log(val1);




// Terniary Operator

//  condition ? true : false

const price=150;

price>=100 ? console.log("greater than 100") : console.log("less than 100")