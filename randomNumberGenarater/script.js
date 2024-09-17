let btn=document.getElementById("btn");
let label=document.getElementById("label");
let randomNumber;

btn.onclick=function(){
    let min=document.getElementById("min").value;
    let max=document.getElementById("max").value;
    min=Number(min)+1
    max=Number(max)
    randomNumber=(Math.floor(Math.random()*(max-min))+(min));
    label.textContent=`${randomNumber}`
}

