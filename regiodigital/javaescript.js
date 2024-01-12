const horas = document.getElementById('horas');
const minutos = document.getElementById('Minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr <10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;


    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = sec
})