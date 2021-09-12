const DAY = document.querySelector('.day');
const HOUR = document.querySelector('.hour');
const MINUTE = document.querySelector('.minute');
const SECOND = document.querySelector('.second');
const DATE = document.querySelector('#date');
const TIME = document.querySelector('#time');
const SUBMIT_BTN = document.querySelector('.btn');
const OPEN_BTN = document.querySelector('.open-btn');
const CLOSE_BTN = document.querySelector('.close-btn');
const FORM = document.querySelector('.form');



SUBMIT_BTN.addEventListener('click', setEvent);


OPEN_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('open btn clicked');
    FORM.classList.add('display-form');
})


CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    FORM.classList.remove('display-form');
})


// By default set my birthday 
const myBirthday = `september 16,2021, 00:00:00`;
var intervalID;
doSetInterval(myBirthday);


function setEvent(event) {

    event.preventDefault();
    console.log('Here im a');
    let dateInput = DATE.value;
    let timeInput = TIME.value;

    // extracting year
    let year = dateInput.substr(0, dateInput.indexOf('-'))

    // extracting month from date input
    let month = dateInput.substr(dateInput.indexOf('-') + 1, 2);
    month = convertMonth(month);
    // extracting date from input
    let date = dateInput.substr(dateInput.lastIndexOf('-') + 1)

    // extracting hours from time input
    let hours = timeInput.substr(0, timeInput.indexOf(':'))

    // extracting minutes from time input
    let minutes = timeInput.substr(dateInput.lastIndexOf(':') - 1, 2)

    let newEvent = `${month} ${date},${year}, ${hours}:${minutes}:00`;


    // Clears the previos interval from the window
    clearInterval(intervalID);
    // set new interval
    doSetInterval(newEvent);
}


function getRemainingTime(newEvent) {

    const eventTime = new Date(newEvent).getTime();
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

function setCountdown(newEvent) {
    const [day, hour, minute, second] = getRemainingTime(newEvent);
    DAY.innerText = day;
    HOUR.innerText = hour;
    MINUTE.innerText = minute;
    SECOND.innerText = second;
}

function doSetInterval(newEvent) {
    intervalID = setInterval(() => {
        setCountdown(newEvent);
    }, 1000);
}

function convertMonth(month) {
    let newMonth = ''
    switch (month) {

        case '01':
            newMonth = 'january'

            break;
        case '02':
            newMonth = 'february'

            break;
        case '03':
            newMonth = 'march'

            break;
        case '04':
            newMonth = 'april'

            break;
        case '05':
            newMonth = 'may'

            break;
        case '06':
            newMonth = 'june'

            break;
        case '07':
            newMonth = 'july'

            break;
        case '08':
            newMonth = 'august'

            break;
        case '09':
            newMonth = 'september'

            break;
        case '10':
            newMonth = 'october'

            break;
        case '11':
            newMonth = 'november'

            break;
        case '12':
            newMonth = 'december'

            break;

        default:
            newMonth = 'january';
            break;
    }
    return newMonth;
}