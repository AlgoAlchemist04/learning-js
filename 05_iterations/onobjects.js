const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    py:"python"

}

for(const key in myObject){
console.log(key+" => "+myObject[key])

}


//arrays using for in loop

const myArr=["js","cpp","java","py","ruby"]

for(const key in myArr){
console.log(key)   // it will print array index to fix this use arr[key]
}

//to fix this array print

for(const key in myArr){
console.log(myArr[key])  //use this to print arr as for in loop works on indexes
}


//Note: we cant use for in loop over maps because maps are non-iterable