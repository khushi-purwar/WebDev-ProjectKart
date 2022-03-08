window.onload = function () {
    'use strict';
    var tens = 0, seconds = 0, appendTens = document.getElementById('tens'),
        appendSeconds = document.getElementById('seconds'),
        buttonStart = document.getElementById('start'),
        buttonReset = document.getElementById('reset'),
        buttonStop = document.getElementById('stop'),  Interval;
    
    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };
    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    };
    buttonStop.onclick = function () {
        clearInterval(Interval);
    };
    function startTimer() {
        tens++;
        
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
    var Lap = document.getElementById('lap');
    var Laps = document.getElementById('laps');
    var clearButton=document.getElementById('lap-clear-button');

    Lap.onclick = function() {
            Laps.innerHTML +="<li>"+`${seconds} : ${tens}`+" "+" "+"lap" + "</li>";
            myFunction();
    }
    clearButton.onclick=function(){
        document.querySelector('#laps').innerHTML=" ";
        document.querySelector('#lap-clear-button').style.display = "none";
    }
    function myFunction() {
        document.querySelector('#lap-clear-button').style.display = "block";
      }
};
