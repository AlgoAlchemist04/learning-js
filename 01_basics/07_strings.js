const name="Aniket"
const age=21

console.log("My name is "+name+" and my age is "+age)  //this is not proper way to concatenate

console.log(`My name is ${name} and my age is ${age}`)  //this is the proper way

console.log(typeof name)

console.log(name[0])

const gameName=new String('Red Dead Redemption')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf("Dead"))

const spacestring="   aniket      nutrino      "
console.log(spacestring)
console.log(spacestring.trim())  //just trims extreme spaces not the spaces in between

const myEmail="aniketambilwade22@vit.edu"

console.log(myEmail.replace("vit.edu","gmail.com"))

console.log(myEmail.includes("aniket"))

let email="aniketambilwade07@gmail.com"
email.replace("aniket","nutrino")  //strings are immutable therefore it doesnt change the original one even after replacing
console.log(email)  


const game="Grand-Theft-Auto"
console.log(game.split("-"))