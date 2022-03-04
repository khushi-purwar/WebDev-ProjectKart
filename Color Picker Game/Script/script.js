var noOfSquares = 6, arr = [], picked,
    squares = document.getElementsByClassName('square'),
    targetColor = document.getElementById('targetColor'),
    message = document.getElementById('message'),
    head = document.querySelector('h1'),
    reset = document.getElementById('NewColor');

init();
function init () {
    'use strict';
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
        squares[i].addEventListener('click', function () {
            if (picked === this.style.backgroundColor) {
                message.textContent = 'correct';
                message.style.color = 'green';

    changeColor(this.style.backgroundColor);
                reset.textContent = 'Play Again ?';
              }
           else
               {
                   message.textContent = "Try Again";
                   message.style.color = 'red';
                   //to hide the color
                   this.style.backgroundColor = '#232323';
          }
});
     }
}
reset.addEventListener('click', resetIn);

function randomPickedColorIndex ()
{
    return Math.floor(Math.random() * arr.length);
}
function generateRandomColor (limit) {
    var color = [];
    for (var i = 0; i < limit; i++)
        color.push(rgbGenerator());
    return color;
}
function rgbGenerator () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb("+r+", "+g+", "+b+")";
    
}
function changeColor (color) {
    for (var i = 0; i < squares; i++)
        squares[i].style.backgroundColor = color;
    head.style.backgroundColor = color;
}
function resetIn () {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.tabIndex = "";
    head.style.backgroundColor = "steelblue";
    
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = arr[i];  
}