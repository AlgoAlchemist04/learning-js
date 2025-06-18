class User{
    constructor(username){
        this.username=username;

    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

     static createId(){
        return `123`
    }
}

const aniket=new User('aniket')
//console.log(aniket.createId()) //we cant access createId as it is static