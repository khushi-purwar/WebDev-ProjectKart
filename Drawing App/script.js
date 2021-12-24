//creating variables for all the elements

let canvas = document.getElementById("canvas");
let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let sizeElement = document.getElementById("size");
let colorElement = document.getElementById("color");
let clearElement = document.getElementById("clear");

var ctx = canvas.getContext("2d");
let size = 5;
let isPressed = false;
let color = "black";
let x;
let y;

// Adding Event Listeners

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

//drawing a circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

//drawing a line
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

//update size as we increase or decrease it
function updateSizeOnScreen() {
  sizeElement.innerText = size;
}

// Button OnClick
increaseButton.addEventListener("click", () => {
  size += 1;

  if (size > 30) {
    size = 30;
  }

  updateSizeOnScreen();
});

decreaseButton.addEventListener("click", () => {
  size -= 1;

  if (size < 1) {
    size = 1;
  }

  updateSizeOnScreen();
});

colorElement.addEventListener("change", (e) => (color = e.target.value));
clearElement.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
