const input=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')
const button=document.getElementById('button')
function time(){
    const date =new Date();
    return date.toLocaleString();
}

showtask();
let li=document.createElement('li')
button.addEventListener('click',function(){
    if(input.value === ''){
        alert("please enter the task")
    }
    else{
        let li1=document.createElement('li')
        li1.innerHTML=input.value+"     " +time();
        listContainer.appendChild(li1);
        let span=document.createElement('span')
        span.textContent = "\u00D7";
       // span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    //    input.innerHTML='';
        input.value='';// Use value instead of innerHTML to clear the input
        savedata();
 });
 listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
         // Use tagName to check the element type
        e.target.classList.toggle("checked")
            savedata();
            let now=time();
            li.appendChild(now)
    }
    else if (e.target.tagName==="SPAN"){
        // Use else if and tagName for the condition
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem('data',listContainer.innerHTML)
 }

 function showtask() {
    listContainer.innerHTML=localStorage.getItem('data');
    
}



