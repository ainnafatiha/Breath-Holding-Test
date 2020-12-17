/* TABLE OF CONTENT

1. CODES FOR TAKE A DEEP BREATH TIMER
2. CODES FOR HOLD YOUR BREATH TIMER
3. CODES FOR START AND STOP BUTTON FUNCTION 

*/


// 1. CODES FOR TAKE A DEEP BREATH TIMER
var timeLeft = 3;
var elem = document.querySelector(".prepare-timer");
var timerId;

function startCountdown() {
  document.getElementById("breath-count").innerHTML = "Take a deep breath";
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
  }, 5000); 
}

function tick() {
  document.getElementById("breath-count").innerHTML = "Hold your breath";
  var secs = timeInSecs;
    if (secs < 60) {
        timeInSecs++;
    } else {
      clearInterval(ticker);
      // startTimer(0 * 60);
    }
  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  document.querySelector(".timer").innerHTML = pretty;
  document.querySelector(".prepare-timer").style.display = 'none';
}

//3. CODES FOR START AND STOP BUTTON FUNCTION

//3.1 start button function
function startAnimate() {
  startTimer(0 * 60);
  document.querySelector(".load").style.animationPlayState='running';
  document.querySelector(".internal-circle").style.animationPlayState='running';
  document.querySelector(".external-circle").style.animationPlayState='running';
}

//3.2 stop button function
function stopAnimate() {
  document.querySelector(".load").style.animationPlayState='paused';
  document.querySelector(".internal-circle").style.animationPlayState='paused';
  document.querySelector(".external-circle").style.animationPlayState='paused';
}
