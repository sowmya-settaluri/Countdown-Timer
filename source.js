const startingTime = 1;
let time = startingTime * 60;

const countdownElement = document.getElementById('countdown');

setInterval(Countdown, 1000);

function Countdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    if(sec < 10) sec = '0' + sec;

    countdownElement.innerHTML = `${min}:${sec}`;
    if(min == '00' && sec == '00') return;
    time--;
}