//for of

//["", "", ""] //arr of strings
//[{}, {}, {}]  // arr of objects


const arr=[1,2,3,4,5]

for(const nums of arr){
console.log(nums)
}

console.log() //just to add space



//on strings

const greeting="Hello Nutrino !! :)"

for(const iterator of greeting){
    if(iterator==" "){    //to avoid spaces (HEY YOOOO!!! keep an eye on thissss)
continue
    }
console.log(`each char of greeting is ${iterator}`)
}

//map 

const map=new Map
map.set("IN", "India")
map.set("Fr", "France")
map.set("USA", "United States of America")

for(const key of map){  //this will print whole map but we want key and value seperate
console.log(key)
}

//to seperate key and value

for(const [key,value] of map){
console.log(`key=${key} and value=${value}`);

}


//Note you cannot iterate objects using for of loop