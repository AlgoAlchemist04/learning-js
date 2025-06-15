const ip=document.querySelector(".inputxt");
const btn=document.querySelector(".btn");
const para=document.querySelector(".para")

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    para.innerHTML=`your given text= ${ip.value}`
})