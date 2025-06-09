const coding=["js","python","java","cpp","ruby"]

const value=coding.forEach((item)=>{
    //console.log(item)   
    return item    //if you return item still it will only give undefined 
})

console.log(value)  //it will always give undefined as forEach() returns nothing


const myNums=[1,2,3,4,5,6,7,8,9,10]

const numValues=myNums.filter((num)=>{
return num>4     // this filler method return values
})

console.log(numValues)




//theres a way to store value from foreach 
console.log("way to store values from forEach()")
const newNums=[]

myNums.forEach((item)=>{
    if(item>4){
newNums.push(item)
    }
})

console.log(newNums)



//example of .filter

const books=[
    {title:"book one", genre:"Fiction", publish:1981, edition:2004},
    {title:"book two", genre:"Non-Fiction", publish:1992, edition:2008},
    {title:"book three", genre:"History", publish:1999, edition:2007},
    {title:"book four", genre:"Non-Fiction", publish:1989, edition:2010},
    {title:"book five", genre:"Science", publish:2009, edition:2014},
    {title:"book six", genre:"Fiction", publish:1987, edition:2010},
    {title:"book seven", genre:"History", publish:2004, edition:2010},
]

const userBooks=books.filter((bk)=>bk.genre===`History`)  //return all the books having genre history only
  
console.log(userBooks)

const booksafter2k=books.filter((bk)=>{ return bk.publish>=2000}) //return books after year 2000

console.log(booksafter2k)

//Note use return if encounter curly braces{} and dont use return keyword if u dont find any ccurly braces simply write the condition
//in first filter we didnt use return keyword as there are no curly braces
//in second fileter we used return as curly braces are also present