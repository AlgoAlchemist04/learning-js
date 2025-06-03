const accountId= 12210503 //const cannot be changed throught the code
let accountEmail= "aniketambilwade@gmail.com" // two ways to declare var i.e let and var use let always bc var has block scope issues
var accountPassword= "12345" //dont use var as it has variable scope issues ex.if same name of var is present in loops it will be changed
accountCity= "Pune" //this is also a way to declare var but not preferred
let accountState;   //if unassigned then it will show undefined

//accountId= 1111111 #cant be changed as accountId is constant

accountEmail="aa.aa@gmail.com"
accountPassword="000001"
accountCity="Mumbai"


//console.log(accountId)

console.table([accountEmail,accountPassword,accountCity,accountId,accountState])