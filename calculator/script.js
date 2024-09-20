let dis=document.getElementById('textbox')

function display(input){
    dis.value +=input;
}

function clean(){
    dis.value = '';
}

function cal(){
try {
    dis.value=eval(dis.value)

} catch (error) {
    dis.value='error';
}}