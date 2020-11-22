/* TABLE OF CONTENT

1. CODES FOR PREPARATION TIMER
2. CODES FOR HOLD YOUR BREATH TIMER */


// 1. CODES FOR PREPARATION TIMER
var timeLeft = 3;
var elem = document.querySelector(".prepare-timer");
var timerId;

function startCountdown() {
  timerId = setInterval("countdown()", 1200);
}

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft + 's';
        timeLeft--;
    }
}

// 2. CODES FOR HOLD YOUR BREATH TIMER
let text = document.querySelector(".timer");
let load = document.querySelector(".load");

var timeInSecs;
var ticker;
function startTimer(secs) {
  setTimeout(() => {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
  }, 12000); 
}

function tick() {
  var secs = timeInSecs;
    if (secs < 60) {
        timeInSecs++;
    } else {
      clearInterval(ticker);
      startTimer(0 * 60);
    }
  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  document.querySelector(".timer").innerHTML = pretty;
  document.querySelector(".prepare-timer").style.display = 'none';
}
startTimer(0 * 60);

