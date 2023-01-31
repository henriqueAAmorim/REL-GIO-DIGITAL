const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const carrocel = document.getElementById('carrocel');
const imagens = document.getElementsByTagName('img');
const currentIndex = 0; //1

function changeImage() {
    imagens[currentIndex].classList.remove('active'); //2
    currentIndex = (currentIndex + 1) % imagens.length;//3
    imagens[currentIndex].classList.add('active');//4
}

setInterval(changeImage, 3000);

/*
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})
*/

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})
