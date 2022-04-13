var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
function getOption() {
  var obj = document.getElementById("mySelect");
  var functionName = obj.options[obj.selectedIndex].text;
  var myColor = document.getElementById("favcolor");
  var colorpicker = myColor.value;
  ctx.fillStyle = colorpicker;
  ctx.strokeStyle = colorpicker;
  if (functionName == "Rectangle") {
    rectangle();
  }
  if (functionName == "Triangle") {
    triangle();
  }
  if (functionName == "text") {
    text();
  }
  if (functionName == "Smiley Face") {
    face();
  }

  if (functionName == "Constellation") {
    drawconstellation();
  }
}

function rectangle() {
  clearInterval(myani);
  ctx.clearRect(0, 0, 1000, 500);
  ctx.fillRect(25 * 6, 25 * 3, 100 * 6, 100 * 3);
  ctx.clearRect(45 * 6, 45 * 3, 60 * 6, 60 * 3);
  ctx.strokeRect(50 * 6, 50 * 3, 50 * 6, 50 * 3);
}

function triangle() {
  clearInterval(myani);
  ctx.clearRect(0, 0, 1000, 500);
  ctx.beginPath();
  ctx.moveTo(75 * 5, 50 * 5);
  ctx.lineTo(100 * 5, 75 * 5);
  ctx.lineTo(100 * 5, 25 * 5);
  ctx.fill();
}

function face() {
  clearInterval(myani);
  ctx.clearRect(0, 0, 1000, 500);
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(75 * 3, 75 * 3, 50 * 3, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110 * 3, 75 * 3);
  ctx.arc(75 * 3, 75 * 3, 35 * 3, 0, Math.PI, false); // Mouth (clockwise)
  ctx.moveTo(65 * 3, 65 * 3);
  ctx.arc(60 * 3, 65 * 3, 5 * 3, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95 * 3, 65 * 3);
  ctx.arc(90 * 3, 65 * 3, 5 * 3, 0, Math.PI * 2, true); // Right eye
  ctx.stroke();
}

function text() {
  ctx.font = "48px serif";
  ctx.textBaseline = "hanging";
  ctx.strokeText("Hello world", 0, 100);
}

const mouse = {
  x: undefined,
  y: undefined,
};
const particlesArray = [];
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++) {
    particlesArray.push(new Particle());
  }
});

let hue = 0;

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = "hsl(" + hue + ",100%,50%)";
  }
}
Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
};

Particle.prototype.drawcolor = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

function constellation() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].drawcolor();
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function animateconstellation() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  constellation();
  hue += 5;
}
var myani;

function drawconstellation() {
  document.getElementById("message").style.visibility = "visible";
  myani = setInterval(() => {
    animateconstellation();
  }, 10);
}
