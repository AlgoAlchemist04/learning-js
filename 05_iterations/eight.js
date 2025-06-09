const myNums=[1,2,3,4]

//learn reduce method

const myTotal=myNums.reduce((acc,currval)=>{
    console.log(`accumulator= ${acc} currval= ${currval}`)
    return acc+currval},0 ) //0 after function is initial value of accumulator or acc

console.log(myTotal) //addition of all the elements present in arraay


const mytot=myNums.reduce((acc,curr)=>acc+curr,3)  //here ive passsed initial value as 3

console.log(mytot)  //output would be 3 more than total array sum as acc is initialized with 3 instead of zero 0





//example

const myShop=[
    {course:"python", price:2999},
     {course:"webdev", price:5999},
      {course:"DevOps", price:7999},
       {course:"DataScience", price:9999},
]

const courseTotal=myShop.reduce((acc,curr)=>acc+curr.price,0)

console.log(`total of course price is ${courseTotal}`)