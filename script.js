const DAY = document.querySelector('.day');
const HOUR = document.querySelector('.hour');
const MINUTE = document.querySelector('.minute');
const SECOND = document.querySelector('.second');



function getRemainingTime() {

    const eventTime = new Date('september 16,2021, 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const gap = eventTime - currentTime;

    // How time works
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    // remaining time
    let dayRemaining = Math.floor(gap / day);
    let hourRemaining = Math.floor((gap % day) / hour);
    let minuteRemaining = Math.floor((gap % hour) / minute);
    let secondsRemaining = Math.floor((gap % minute) / second);

    return [dayRemaining, hourRemaining, minuteRemaining, secondsRemaining];
}

function setCountdown() {
    const [day, hour, minute, second] = getRemainingTime();
    DAY.innerText = day;
    HOUR.innerText = hour;
    MINUTE.innerText = minute;
    SECOND.innerText = second;
}
setInterval(() => {
    setCountdown();
}, 1000);