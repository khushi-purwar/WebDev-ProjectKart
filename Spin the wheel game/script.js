alert('You can only spin the wheel onces')

// Code for spin

const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.button');
const arrow = document.querySelector('.pin');

let deg = 0;

// Code for start button

startButton.addEventListener('click', () => {
	startButton.style.pointerEvents = 'none';
	deg = Math.floor(5000 + Math.random() * 5000);
	wheel.style.transition = 'all 10s ease-out';
	wheel.style.transform = `rotate(${deg}deg)`;
	wheel.classList.add('blur');
	playSound()
});

wheel.addEventListener('transitionend', () => {
	wheel.classList.remove('blur')
	startButton.style.pointerEvents = 'none';
	wheel.style.transition = 'none';
	const actualDeg = deg % 360;
	wheel.style.transform = `rotate(${actualDeg}deg)`;
	stopSound();
	arrow.classList.add('bounce')
	update();
	draw();
});

// Code for audio

let audio = new Audio('tick.mp3')

function playSound()
{
        audio.currentTime = 0;
        audio.play();
        audio.loop = true;
}

function stopSound()
{
	audio.pause();
}

// Code for Confetti

let canvas = document.getElementById('confetti');
canvas.width = 1320;


let ctx = canvas.getContext('2d');
let pieces = [];
let numberOfPieces = 100;
let lastUpdateTime = Date.now();

function randomColor() {
	let colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0'];
	return colors[Math.floor(Math.random() * colors.length)];
}

function update() {

	let now = Date.now(),
		dt = now - lastUpdateTime;


	for (let i = pieces.length - 1; i >= 0; i--) {
		let p = pieces[i];

		if(p.y > canvas.height) {
			pieces.splice(i, 1);
			continue;
		}

		p.y += p.gravity * dt;
		p.rotation += p.rotationSpeed * dt;
	}

	while (pieces.length < numberOfPieces) {
		pieces.push(new Piece(Math.random() * canvas.width, -20));
	}

	lastUpdateTime = now;

	setTimeout(update, 1);

}

function draw() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	pieces.forEach(function (p) {
		ctx.save();

		ctx.fillStyle = p.color;

		ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
		ctx.rotate(p.rotation);

		ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
		ctx.restore();
	});

	requestAnimationFrame(draw);
}

function Piece(x, y) {
	this.x = x;
	this.y = y;
	this.size = (Math.random() * 0.5 + 0.75) * 15;
	this.gravity = (Math.random() * 0.5 + 0.75) * 0.03;
	this.rotation = (Math.PI * 2) * Math.random();
	this.rotationSpeed = (Math.PT * 2) * Math.random() * 0.0001;
	this.color = randomColor();
}

while(pieces.length < numberOfPieces) {
	pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
}