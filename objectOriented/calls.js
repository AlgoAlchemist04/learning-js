function SetUsername(name){
this.name=name
console.log("this fxn is called")
}

function createUser(username, email, password){
    SetUsername.call(this,username);
    this.email=email;
    this.password=password
}

const emp1=new createUser("aniket","vit@gmail.edu","1210")
console.log(emp1);
