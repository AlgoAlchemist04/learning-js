class User{
    constructor(username){
this.username=username;
    }

}

class Teacher extends User{
constructor(username,email,password){
    super(username);
    this.email=email;
    this.password=password;

}

 printcourse(){
console.log(`this course was added by ${this.username} sir`)
}
}

const aniket=new Teacher("aniket", "aniket@aka.com","122333")
const varad=new Teacher("varad","vgaikwad@123","121212")
aniket.printcourse()
varad.printcourse()