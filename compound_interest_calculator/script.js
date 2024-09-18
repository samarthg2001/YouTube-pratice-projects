
const Submit= document.getElementById('Submit');
const result= document.getElementById('result');
let total;
Submit.onclick=function(){
    const Principal= document.getElementById('Principal').value;
    const interest= (document.getElementById('interest').value)/100;
    const Year= document.getElementById('Year').value;

    total = Principal * Math.pow((1 + interest), Year);
    result.textContent=total.toLocaleString('hi-IN',{style:'currency',currency:'INR'})
}