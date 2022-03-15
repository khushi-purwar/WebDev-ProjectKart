'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🍕 Correct Number!';


// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click' , function(){
    const guess = document.querySelector('.guess').value;
    //console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = '😔 No Number ! , please enter some Number';
    }
    else if(guess == secretNumber){
        document.querySelector('.message').textContent = '🍕 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Oops ☹ My number is  too low , Please enter low Number';
            score--;
            document.querySelector('.score').textContent = score; 
        }else{
            document.querySelector('.message').textContent = '😭 Sorry , You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }else{
        if(score > 1){
            document.querySelector('.message').textContent = 'Oops ☹ My number is  too high , Please enter high Number'; 
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😭 Sorry , You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// again //

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    
});