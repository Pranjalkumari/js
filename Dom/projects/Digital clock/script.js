const clock = document.getElementById('clock')
// we can also use querySelector
setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)// change every second 