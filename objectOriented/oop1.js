const name="varad"

const obj={
    name:"aniket",
    age:21,

    greetings:function(){
        console.log(`hello ${this.name}`)  //if you wont put this keyword it print varad as a name not aniket which is inside the object
    }

}

console.log(obj.name)
obj.greetings()



function User(name,age,aboutyou){
this.name=name;
this.age=age;
this.aboutyou=aboutyou;
 this.greetings=function(){
console.log(`welcome ${this.name}`)
 }
//return this; // return this is not necessay it is implicitly written
}

const user1=new User("aniket",21,"hey yo this is your boy aniket");
const user2=new User("akash",31,"hello fellas im NYgrad")

console.log(user1);
console.log(user2);

User.prototype.increament=function(){
    console.log(`increament age of ${this.name} is ${this.age+5}`)
}

User.prototype.decrement=function(){
    console.log(`decrement age of ${this.name} is ${this.age-5}`)
}

user1.decrement();
user2.increament();
