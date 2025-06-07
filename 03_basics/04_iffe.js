/// Immediately Invoked Function Expressions (IIFE) not iife file name is messedup

// () function () execution therefore two parenthesis ()()

function CheckDB(){
console.log('db connected')
}
CheckDB() ;

//theres a shotcut to execute the function immediately i.e iife

(function checkDBconnectivity(){     //named iife
    console.log(`db succesfully connected`);
})();

((name)=> {
  console.log(`This is ${name}`);
})("aniket");
