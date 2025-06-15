const form=document.querySelector('form')


//if u try to get value of height and weight outside event listener it will give an empty value
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector("#height").value)
   const weight=parseInt(document.querySelector("#weight").value)
   const results=document.querySelector("#results")
if(height ==='' || height <=0 || isNaN(height)){
results.innerHTML="please give a valud height";

}
if(weight ==='' || weight <=0 || isNaN(weight)){
results.innerHTML="please give a valud weight";

}
else {
   const bmi= (weight/((height*height)/10000)).toFixed(2);
   results.innerHTML=`<span>${bmi} </br></span>`
   if(bmi<18.6){
results.append(`you are underweight`)
   }
   else if(bmi>24.9){
results.append(`you are overweight`)
   }
   else{
    results.append(`you are Normal`)
   }
}



})