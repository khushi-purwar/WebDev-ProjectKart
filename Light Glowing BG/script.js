let canvasElm = document.querySelector(".canvasElm");

canvasElm.width = window.innerWidth;
canvasElm.height = window.innerHeight;

let colors = [
  "109,176,238",
  "109,238,230",
  "150,238,109",
  "174,109,238",
  "235,238,109",
  "238,109,109",
  "238,109,225",
  "238,186,109"
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

let ctx = canvasElm.getContext("2d");

class Particle {
  constructor(x, y, dx, dy, size, color, colorOpacity) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;
    this.colorOpacity = colorOpacity;
    this.growVal = 0.01;
    this.opacityVar = 0.01 / 2;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color}, ${this.colorOpacity})`;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    this.update();
  }

  update() {
    // Flash colors based on opacity
    this.colorOpacity += this.opacityVar;
    if (this.colorOpacity >= 1 || this.colorOpacity <= 0.05) {
      this.opacityVar *= -1;
    }

    // Grow and shrink circles
    this.size += this.growVal;
    if (this.size >= maxCircleSize / 2 || this.size <= 0.1) {
      this.growVal *= -1;
    }
  }
}

let particlesArray = [];
let maxCircleSize = 8;

// Generate circles
function generateCirclesArray(circleSize) {
  // Draw a rows & columns of circles with spaces in between (space in size of 1 circle)
  for (let i = 0; i < canvasElm.height / circleSize / 4; i++) {
    // Top to bottom
    for (let j = 0; j < canvasElm.width / circleSize / 4; j++) {
      // Left to right
      particlesArray.push(
        new Particle(
          circleSize + circleSize * j * 4, // X
          circleSize + circleSize * i * 4, // Y
          0,
          0, // dx, dy
          randomBetween(0.5, circleSize / 2), // Size
          colors[Math.floor(Math.random() * colors.length)], // Color
          Math.random() * 1 // Opacity
        )
      );
    }
  }
}
generateCirclesArray(maxCircleSize);

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvasElm.height = window.innerHeight;
  canvasElm.width = window.innerWidth;
});

function animate() {
  ctx.clearRect(0, 0, canvasElm.width, canvasElm.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}
animate();