const date=new Date();
console.log(date.toLocaleTimeString());

setInterval(()=>{
    const date=new Date();
    const datee=document.querySelector("#clock");
    datee.innerHTML=`${date.toLocaleTimeString()}`;})