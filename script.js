const timerDisplay = document.querySelector('.timer-display');
const sessionTimeDisplay = document.querySelector('.session-time-display');
const breakTimeDisplay = document.querySelector('.break-time-display');
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
    timerDisplay.classList.remove('break');
    timerDisplay.classList.add('session'); 
});


//session minus
sessionMinus.addEventListener('click', () => {    
    changeSessionTimeMinus();
});

//session plus
sessionPlus.addEventListener('click', () => {    
    changeSessionTimePlus();
});

//break minus
breakMinus.addEventListener('click', () => {    
    changeBreakTimeMinus();
});

//break plus
breakPlus.addEventListener('click', () => {    
    changeBreakTimePlus();
});




//all the properties to run a pomodoro clock
let startTime = 1500;
let restTime = 300;
let currentTime = startTime;
let sessionTime = startTime;
let currentBreakTime = restTime;
let breakTime = restTime;
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
                countTime();
            }, 1000);
        }
    }
}

//format time
function countTime() {
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

//resets timer
function resetClock() {
    clearInterval(clockTimer);
    isClockRunning = false;
    currentTime = sessionTime;    
    countTime();
}

//change session/break timer
function stepDown() {
    if (currentTime > 0) {
        currentTime--;
    } else if (currentTime === 0) {
        if (type === 'work') {
            currentTime = breakTime;
            type = 'break'; 
            timerDisplay.classList.remove('session');
            timerDisplay.classList.add('break');        
        } else {
            currentTime = sessionTime;
            type = 'work';
            timerDisplay.classList.remove('break');
            timerDisplay.classList.add('session');         
        }
    }
    countTime();
}

//session timer
function showSessionTime() {
    const secs = sessionTime;
    let result = '';
    let seconds = secs % 60;
    let minutes = parseInt(secs / 60) % 60;
    let hours = parseInt(secs / 3600);

    
    //add zeroes if it's less than 10
    function displayTimeSession(time) {
        return time < 10 ? `0${time}` : time;
    }

    result += `${displayTimeSession(hours)}:${displayTimeSession(minutes)}:${displayTimeSession(seconds)}`;
    sessionTimeDisplay.innerText = result.toString();
}

function changeSessionTimeMinus() {
    if (sessionTime <= 1) {
        sessionTime = 1;
    } else {
        sessionTime -= 5;
        showSessionTime();
        currentTime = sessionTime;
        countTime(); 
    }   
}

function changeSessionTimePlus() {
    if (sessionTime >= 86400) {
        sessionTime = 86400
    } else {
        sessionTime += 5;
        showSessionTime();
        currentTime = sessionTime;
        countTime(); 
    }       
}

//break timer
function showBreakTime() {
    const secs = currentBreakTime;
    let result = '';
    let seconds = secs % 60;
    let minutes = parseInt(secs / 60) % 60;
    let hours = parseInt(secs / 3600);

    
    //add zeroes if it's less than 10
    function displayTimeSession(time) {
        return time < 10 ? `0${time}` : time;
    }

    result += `${displayTimeSession(hours)}:${displayTimeSession(minutes)}:${displayTimeSession(seconds)}`;
    breakTimeDisplay.innerText = result.toString();
}

function changeBreakTimeMinus() {
    if (breakTime <= 1) {
        breakTime = 1;
    } else {
        breakTime -= 5;
        currentBreakTime = breakTime;
        showBreakTime();        
        countTime(); 
    }   
}

function changeBreakTimePlus() {
    if (breakTime >= 86400) {
        breakTime = 86400;
    } else {
        breakTime += 5;
        currentBreakTime = breakTime;
        showBreakTime();        
        countTime(); 
    }   
}

countTime();
showSessionTime();
showBreakTime();