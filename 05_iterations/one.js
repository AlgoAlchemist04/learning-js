//for

for(let i=0; i<5;i++){
console.log("hello aniket")
}

//nested loop

for(let i=1; i<=5;i++){   /// printing tables
    console.log(`table of ${i}`)
    for(let j=1; j<=10;j++){
console.log(`${i} * ${j} = ${i*j}`)
    }
}


//break and continue   keyword

for(let i=1;i<=20;i++){

    if(i ==5){
console.log(`${i} detected`)
break
    }
console.log(i)
}

console.log("now use continue ")
console.log()



for(let i=1;i<=20;i++){

    if(i ==5){
console.log(`${i} detected`)  //5 value is skipped

continue
    }
console.log(i)  //this wont execute for i==5
}
