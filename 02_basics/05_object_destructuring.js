const course={
    name:"learning-js",
    price:"999",
    courseInstructor:"nutrinoSOROS"
}
console.log(course.courseInstructor)  //instead of writing course.courseinstructor (object.key) declare the element
const{courseInstructor}=course;  //here's how
console.log(courseInstructor)

//theres also a way to reduce key name
const{courseInstructor: cinst}=course;

console.log(cinst)   //this simple see