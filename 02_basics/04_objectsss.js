//const tinder=new Object()//singleton object
const tinder={}   //this is non-singleton object

tinder.name="tejas"
tinder.age=23
tinder.isLoggedIn=false

console.log(tinder)



const objInsideobj={
    email:"tjgamer@gmail.com",
    fullname:{
        userfullname:{
        name:"Tejas",
        lastname:"Jadhav"},

        adminname:{
adname:"nutrinoSORAS"
        }
    }
}

console.log(objInsideobj)
console.log(objInsideobj.fullname.adminname.adname)
console.log(objInsideobj.fullname.userfullname.lastname)


//combining two different objects

const obj1={1:"a",  2:"b"}
const obj2={1:"c" ,  2:"d"}
//const obj3={obj1, obj2}  //same problem as arrays object inside object

//better way to combine two objects
const obj4=Object.assign({},obj1,obj2) // starting object is target and next to it are source obj2 and obj3 are stored in {}

//much better or best way of combining objects

const obj5={...obj1,...obj2}  //spread operator

console.log("print by assign method")
console.log(obj4)

console.log("by spread operator")
console.log(obj5)



//fetch keys and values from object

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty("isLoggedIn"))