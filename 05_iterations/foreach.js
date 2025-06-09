const coding=["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    console.log(val)
})  //call back function doesnt have any name

//we can also use arrow function =>

    coding.forEach( (iterator)=>{
        console.log(iterator)
    } )


    function printMe(item){
console.log(item)
    }

    console.log("printing using external function")
    coding.forEach(printMe)   //use reference dont call it like funName() dont use curly brakets

   

    //other parameters of obj.forEach()  here obj is array
    coding.forEach( (item, index, arr)=>{
        console.log(`${item}   ${index}    ${arr}`)
    })


    //over OBJECTSSS

    const myCoding=[
{language:"javascript",
    extension:"js"
},
{
    language:"python",
    extension:"py"
},
{
    language:"java",
    extension:"java"
}

    ]


    myCoding.forEach((item)=>{
console.log(item)    //this prints all whole objects
    })

    //to get specific part or element or key 

myCoding.forEach((key)=>{
    console.log(`language: ${key.language} and extension: ${key.extension}`)
})