//singleton
//object create
//object literals

const mySym=Symbol("key1");

const JsUser={
    name:"Aniket",
    "full name":"Aniket Ambilwade",
    [mySym]:"myKey1",  //use square brackets always with symbols
    age:21,
    loaction:"Pune",
    email: "Aniket@tech.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])  //this method is used when object is defined using string key

// console.log(JsUser.full name) //we cant print full name as it is defined as string key
//theres only one way 
console.log(JsUser["full name"])  //this is the way to print it

console.log(JsUser[mySym])

JsUser.email="aniket.ambilwade07@gmail.com" //to change value of key in object

//Object.freeze(JsUser) //this is just to freeze the object and further changes cannot be made into this


JsUser.greeting = function() {
    console.log("hello js user");
}

JsUser.greeting1=function(){
    console.log(`hello js user, ${this.name}`) //this is used to refer objects
}

console.log(JsUser.greeting())
console.log(JsUser.greeting1())

console.log(JsUser.greeting)