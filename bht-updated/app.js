/* TABLE OF CONTENT

1. CODES FOR PREPARATION TIMER
2. CODES FOR HOLD YOUR BREATH TIMER
3. CODES FOR CSS FUNCTION 
4. CODES FOR CHANGE LANGUAGE */


// 1. CODES FOR PREPARATION TIMER
var timeLeft = 3;
var elem = document.querySelector(".prepare-timer");
var timerId;

let langPack = { 
  en: {
    "b-title":'Breath-Holding Test',
    "breath-count":'Get ready to take a deep breath',
    "s-button":'Start',
    "st-button":'Stop',
    "r-button":'Reset',
    "b-performance":'Lung Capacity Performance',
    "b-poor":'Poor',
    "b-average":'Average',
    "b-amazing":'Amazing',
    "b-hold":"Hold your breath",
    "b-breath":"Take a deep breath",
    "b-end":"Good job!"
  },
  bm: {
    "b-title":'Ujian Menahan Nafas',
    "breath-count":'Sedia untuk menarik nafas sedalam yang mungkin',
    "s-button":'Mula',
    "st-button":'Berhenti',
    "r-button":'Semula',
    "b-performance":'Prestasi Kapasiti Paru-paru Anda',
    "b-poor":'Lemah',
    "b-average":'Sederhana',
    "b-amazing":'Luar biasa',
    "b-hold":"Tahan nafas anda",
    "b-breath":"Tarik nafas anda dalam-dalam",
    "b-end":"Anda berjaya!"
  }
  }

let lang="en";
let trans="bm";
function startCountdown() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
   //check define/undefine
   if (urlLang) {
    if (urlLang=='bm') {
      lang = urlLang;
      trans="en";
    }
  }
  document.getElementById("breath-count").innerHTML = langPack[lang]["b-breath"];
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
    ticker = setInterval("startTicking()", 950);
    document.getElementById("st-button").disabled=false;
  }, 6000); 
}

function startTicking() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
   //check define/undefine
   if (urlLang) {
    if (urlLang=='bm') {
      lang = urlLang;
      trans="en";
    }
  }
  document.getElementById("breath-count").innerHTML = langPack[lang]["b-hold"];
  var secs = timeInSecs;
    if (secs < 60) {
        timeInSecs++;
    } else {
      clearInterval(ticker);
      // startTimer(0 * 60);
      document.getElementById("breath-count").innerHTML = langPack[lang]["b-end"];
    }
  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  document.querySelector(".timer").innerHTML = pretty;
  document.querySelector(".prepare-timer").style.display = 'none';
  
}


//3. CODES FOR CSS FUNCTION
function startAnimate(start) {
  startTimer(0 * 60);
  document.querySelector(".load").style.animationPlayState='running';
  document.querySelector(".internal-circle").style.animationPlayState='running';
  document.querySelector(".external-circle").style.animationPlayState='running';
  start.disabled = true;
}

function stopAnimate(stop) {
  document.querySelector(".load").style.animationPlayState='paused';
  document.querySelector(".internal-circle").style.animationPlayState='paused';
  document.querySelector(".external-circle").style.animationPlayState='paused';
}

function resetAnimate() {
  window.location.reload();
  document.getElementById('reset').disabled = false;
}


//4. CODES FOR CHANGE LANGUAGE
function changeLanguage() {
  
  //homework: find out const vs var vs let
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');

  //check define/undefine
  if (urlLang) {
    if (urlLang=='bm') {
      lang = urlLang;
      trans="en";
    }
  }

  //define translation url
  let translation="?lang="+trans;

  //change the urls
  let newUrl = window.location.origin+window.location.pathname+translation;
  window.location.href=newUrl;
}

function changeLanguagePack() {

  //detect current language
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');

  console.log(lang);
  for (key in langPack[lang]) {
    console.log(key);
    try {
      console.log(langPack[lang][key]);
      document.getElementById(key).innerHTML=langPack[lang][key];
    
    } catch(e) {
      console.log(key);
      console.log(e);
    }
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  changeLanguagePack()
})
