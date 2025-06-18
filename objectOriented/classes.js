class User{
    constructor(username, email, password){
this.username=username;
this.email=email;
this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const empl1=new User("aniket","aniket@aka.com","@nikeT")

console.log(empl1.encryptPassword())
console.log(empl1.changeUsername())

console.log(empl1)