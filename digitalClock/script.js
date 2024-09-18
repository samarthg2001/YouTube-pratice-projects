function clock(){
   const now = new Date();
    let hour=now.getHours().toString().padStart(2,0)
    const meridiem=hour >=12?"AM":"PM"
    hour=hour%12||12;
    const min=now.getMinutes().toString().padStart(2,0)
    const sec=now.getSeconds().toString().padStart(2,0)
    const timeString=`${hour}:${min}:${sec}:${meridiem}`
    document.getElementById('clock').textContent=timeString;
}
clock()
setInterval(clock,1000)