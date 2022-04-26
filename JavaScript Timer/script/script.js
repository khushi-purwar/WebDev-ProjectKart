let minutes = 0;
let seconds = 0;
let c = 0;

var initial;


function myClickHandler() {
  switch(c) {
    case 0:
      startTimer();
      c = 1;
      break;
    case 1:
      pause();
      c = 0;
      break;
  }
}
const btn = document.getElementById('start');

function startTimer() {
  document.getElementById("start").innerHTML = ' <span class="material-icons">pause</span></span>';
  btn.style.backgroundColor = '#ff0256';
  initial  = setInterval(count, 1000);

}

function pause(){
  btn.style.backgroundColor = '#08e64b';
  document.getElementById("start").innerHTML = ' <span class="material-icons">play_arrow</span></span>';
  clearInterval(initial);
}




function showTime() {
  
  if (minutes < 1) {
    min = "00";
  }
  else {
    if (minutes < 10) {
      min = "" + "0" + minutes ;
    }
    else {
      min = minutes + "";
    }
  }
  if (seconds < 10) {
    sec = "" + "0" + seconds;
  }
  else {
    sec = seconds;
  }
 
}

function count(){
  seconds++;
  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }
  showTime();
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;

}


function resetTimer() {
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  min = "00";
  seconds = "00";
  document.getElementById("start").style.background='#08e64b';
  document.getElementById("start").innerHTML = ' <span class="material-icons">play_arrow</span></span>';
  clearInterval(initial);
}



