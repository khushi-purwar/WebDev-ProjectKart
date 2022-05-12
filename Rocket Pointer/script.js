window.addEventListener('DOMContentLoaded', () => {
	stars();
});

document.addEventListener('mousemove', e => {
	let rocket = document.querySelector('.rocket');
	rocket.style.left = `${e.offsetX}px`;
	rocket.style.top = `${e.offsetY}px`;
});

const stars = () => {
	let count = 50;
	let scene = document.querySelector('.scene');
	let i = 0;
	while(i < count) {
		let star = document.createElement('i');
		let x = Math.floor(Math.random() * window.innerWidth);

		let duration = Math.random() * 1;
		let h = Math.random() * 100;

		star.style.left = `${x}px`;
		star.style.width = `${1}px`;
		star.style.height = `${50 + h}px`;
		star.style.animationDuration = `${duration}s`;

		scene.appendChild(star);
		i++;
	}
};