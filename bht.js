// Table of Content

// 1. Codes for reload
// 2. Codes for circle loader

// 1. Codes for reload
function reloadThePage(){
  window.location.reload();
} 

// 2. Codes for circle loader
let text = document.querySelector(".timer");
let load = document.querySelector(".load");

var timeInSecs;
var ticker;
function startTimer(secs) {
  setTimeout(() => {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
  }, 10000); 
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
}
startTimer(0 * 60);
 



