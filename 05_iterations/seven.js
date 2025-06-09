const myNum=[1,2,3,4,5,6,7,8,9,10]

//map function

const newNums=myNum.map((num)=>num+10)  //add 10 in each value of arr

console.log(newNums)

/// chaining

const Nums=myNum
    .map((num)=>num*10)
    .map((item=>item+1))   //this is called chaining .map().map().map().filter()
    .filter((num)=>num>40)
    console.log(Nums)