// Table of Content
// 1. Codes for reload
// 2. Codes for circle loader
// 3. Codes for circle loader


// 1. Codes for reload
function reloadThePage(){
  window.location.reload();
} 

// 2. Codes for preparation timer
let prepare = document.querySelector(".prepare-timer");
var seconds = 5;
var countdownTimer = setInterval(secondPassed, 1500);
function secondPassed() {
  setTimeout(() => {
    var abs_seconds = Math.abs(seconds);
    var is_negative = seconds > 0;
    var minutes = Math.round((abs_seconds - 30)/60);
    var remainingSeconds = abs_seconds % 60; 
    if (remainingSeconds > 5) 
    {
        remainingSeconds = '';
    }
    if (minutes < 5) 
    {
        minutes = minutes;  
    }
    document.querySelector(".prepare-timer").innerHTML = (is_negative ? '-' : '') + minutes + remainingSeconds;
    seconds--;
  }, 20500);
}

// 3. Codes for circle loader
let text = document.querySelector(".timer");
let load = document.querySelector(".load");

var timeInSecs;
var ticker;
function startTimer(secs) {
  setTimeout(() => {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
  }, 39000); 
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