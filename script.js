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
    console.log('start');
});

//pause
pauseButton.addEventListener('click', () => {
    console.log('pause');
});

//break
resetButton.addEventListener('click', () => {
    console.log('reset');
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




//function clock which contains all methods and properties
function clock() {
    let startTime = 1500;
    let currentTime = 1500;
    let sessionTime = 1500;
    let breakTime = 300;
    let sessionCount = 0;


    //format time
    function time(secs) {
        let result = '';
        let seconds = secs % 60;
        let minutes = parseInt(secs / 60) % 60;
        let hours = parseInt(secs / 3600);
    }
}