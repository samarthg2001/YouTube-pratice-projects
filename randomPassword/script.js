
const button=document.getElementById('btn')
const result=document.getElementById('r')
button.onclick= function randomPassword(){
    let passwordlengh=document.getElementById('userinput').value
console.log(passwordlengh);
    let includeLowercase=false
let includeNumber=false
let includeSymbols=false
let includeUppercase=false

    let Lowercase=document.querySelector('#a')
    let Symbols=document.querySelector('#s')
    let Number=document.querySelector('#num')
    let Uppercase=document.querySelector('#A')
    if(Lowercase.checked){
        includeLowercase=true
    }
    if(Number.checked){
        includeNumber=true
    }
    if(Symbols.checked){
        includeSymbols=true
    }
    if(Uppercase.checked){
        includeUppercase=true
    }
    function genaratePassword(length,
        includeLowercase,
        includeNumber,
        includeSymbols,
        includeUppercase){
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const Lowercase="abcdefghijklmnopqrstuvwxyz"
    const numberCase="0123456789"
    const symbol="~!@#$%^&**()_+/*-}|"
    let allowedChar="";
    let password="";
    allowedChar+=includeLowercase?Lowercase:"";
    allowedChar+=includeUppercase?uppercase:"";
    allowedChar+=includeNumber?numberCase:"";
    allowedChar+=includeSymbols?symbol:"";
    if(length<=0){
    return `password length must be at lease 1 `
    }
     if(allowedChar.length===0){
    return `(at least 1 set charcter needs to be selected)`
    }
    for(let i=0;i<length;i++){
        const num=Math.floor(Math.random()*allowedChar.length)
        password+=allowedChar[num]
    }
    return password
    }

    const password=genaratePassword(
        passwordlengh,
        includeLowercase,
        includeNumber,
        includeSymbols,
     includeUppercase
    )
    
    result.textContent=` the password is ${password}`

}



hello();
Bye(hello);

function hello(){
    console.log(`hello`);
}
function Bye(callback){
    console.log(`Bye`);
    callback();
}