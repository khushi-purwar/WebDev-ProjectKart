const place = new Audio('assets/place.mp3')
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.font = 'Bold 30px Roboto';
let scrollCounter, cameraY, current, mode, xSpeed;
let ySpeed = 5;
let height = 50;
let boxes = [];
boxes[0] = {
  x: 300,
  y: 300,
  width: 200
};
let debris = {
  x: 0,
  width: 0
};
 
function newBox() {
  boxes[current] = {
    x: 0,
    y: (current + 10) * height,
    width: boxes[current - 1].width
  };
}
 
function gameOver() {
  mode = 'gameOver';
  context.fillText('You did Great ! Click to play again.', 50, 50);
}
 
function animate() {
  if (mode != 'gameOver') {96, 0, 
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText('Current Score: ' + (current - 1).toString(), 40, 570);
    for (let n = 0; n < boxes.length; n++) {
      let box = boxes[n];
      context.fillStyle = 'rgb(' + n * 0.1 * 96 + ',' + n * 0.1 * 0 + ',' + n * 0.1 * 230 + ')';
      context.fillRect(box.x, 600 - box.y + cameraY, box.width, height);
    }
    context.fillStyle = ' + n * 0.1 * 163 + ',' + n * 0.1 * 85 + ',' + n * 0.1 * 2 + ';
    context.fillRect(debris.x, 600 - debris.y + cameraY, debris.width, height);
    if (mode == 'bounce') {
      boxes[current].x = boxes[current].x + xSpeed;
      if (xSpeed > 0 && boxes[current].x + boxes[current].width > canvas.width)
        xSpeed = -xSpeed;
      if (xSpeed < 0 && boxes[current].x < 0)
        xSpeed = -xSpeed;
    }
    if (mode == 'fall') {
      boxes[current].y = boxes[current].y - ySpeed;
      if (boxes[current].y == boxes[current - 1].y + height) {
        mode = 'bounce';
        
        let difference = boxes[current].x - boxes[current - 1].x;
        if (Math.abs(difference) >= boxes[current].width) {
          gameOver();
        }
        debris = {
          y: boxes[current].y,
          width: difference
        };
        if (boxes[current].x > boxes[current - 1].x) {
          boxes[current].width = boxes[current].width - difference;
          debris.x = boxes[current].x + boxes[current].width;
        } else {
          debris.x = boxes[current].x - difference;
          boxes[current].width = boxes[current].width + difference;
          boxes[current].x = boxes[current - 1].x;
        }
        
        current++;
        place.play();
        scrollCounter = height;
        newBox();
      }
    }
    debris.y = debris.y - ySpeed;
    if (scrollCounter) {
      cameraY++;
      scrollCounter--;
    }
  }
  window.requestAnimationFrame(animate);
}
 
function restart() {
  boxes.splice(1, boxes.length - 1);
  mode = 'bounce';
  cameraY = 0;
  scrollCounter = 0;
  xSpeed = 3;
  current = 1;
  newBox();
  debris.y = 0;
}
 
canvas.onpointerdown = function() {
  if (mode == 'gameOver')
    restart();
  else {
    if (mode == 'bounce')
      mode = 'fall';
  }
};
 
restart();
animate();
