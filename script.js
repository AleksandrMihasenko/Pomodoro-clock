const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.controls-start');
const pauseButton = document.querySelector('.controls-pause');
const resetButton = document.querySelector('.controls-reset');
const sessionMinus = document.querySelector('.session-minus');
const sessionPlus = document.querySelector('.session-plus');
const breakMinus = document.querySelector('.break-minus');
const breakPlus = document.querySelector('.break-plus');

//add event listeners

//start
startButton.addEventListener('click', () => {    
    clock();
});

//pause
pauseButton.addEventListener('click', () => {    
    clock();    
});

//break
resetButton.addEventListener('click', () => {    
    clock(true);
});


//session minus
sessionMinus.addEventListener('click', () => {
    console.log('minus');
});

//session plus
sessionPlus.addEventListener('click', () => {
    console.log('plus');
});

//break minus
breakMinus.addEventListener('click', () => {
    console.log('minus');
});

//break plus
breakPlus.addEventListener('click', () => {
    console.log('plus');
});

//all the properties to run a pomodoro clock
let startTime = 15;
let currentTime = startTime;
let sessionTime = startTime;
let breakTime = 30;
let sessionCount = 0;
let isClockRunning = false;
let type = 'work';


// toggles the timer start/pause/reset
function clock(reset) {

    if (reset) {
        resetClock();
    } else {
        if (isClockRunning === true) {
            isClockRunning = false;
            clearInterval(clockTimer);
        } else {
            isClockRunning = true;
            clockTimer = setInterval(() => {
                stepDown();
                time();
            }, 1000);
        }
    }
}

//format time
function time() {
    const secs = currentTime;
    let result = '';
    let seconds = secs % 60;
    let minutes = parseInt(secs / 60) % 60;
    let hours = parseInt(secs / 3600);

    
    //add zeroes if it's less than 10
    function displayTimeSession(time) {
        return time < 10 ? `0${time}` : time;
    }

    result += `${displayTimeSession(hours)}:${displayTimeSession(minutes)}:${displayTimeSession(seconds)}`;
    timerDisplay.innerText = result.toString();        
}

//function which resets timer
function resetClock() {
    clearInterval(clockTimer);
    isClockRunning = false;
    currentTime = startTime;
    time();
}

function stepDown() {
    if (currentTime > 0) {
        currentTime--;
    } else if (currentTime === 0) {
        if (type === 'work') {
            currentTime = breakTime;
            type = 'break';
        } else {
            currentTime = sessionTime;
            type = 'work';
        }
    }
    time();
}