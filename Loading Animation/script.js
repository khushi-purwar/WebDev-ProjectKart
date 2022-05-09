TweenMax.to("svg", 1.5, {
	scale: 1.1,
	ease: Sine.easeInOut,
	repeat: -1,
	yoyo: true
});
TweenMax.staggerTo(
	".sparks line",
	0.4,
	{
		"stroke-dashoffset": 395,
		yoyo: true,
		repeat: -1,
		ease: Sine.easeInOut
	},
	0.1
);

var orbit1 = document.querySelector(".orbit1");
var orbit2 = document.querySelector(".orbit2");
var orbit3 = document.querySelector(".orbit3");
var orbit4 = document.querySelector(".orbit4");

initGradient(orbit1, 200,  2);
initGradient(orbit2, 280,  -4);
initGradient(orbit3, 160,  4);
initGradient(orbit4, 100,  -4);

function initGradient(element, angle,  speed) {
	element.angle = angle * Math.PI / 180;
	element.x = parseInt(element.getAttribute("cx"));
	element.y = parseInt(element.getAttribute("cy"));
	element.radiusX = parseInt(element.getAttribute("rx"));
	element.radiusY = parseInt(element.getAttribute("ry"));
	element.gradient = getGradient(element);
	drawGradient(element);
	TweenMax.to(element,100,{repeat:-1,angle:(angle+(Math.PI*2))*speed,ease:Linear.easeNone,onUpdate:drawGradient,onUpdateParams:[element]})
}

function drawGradient(element) {
	element.gradient.setAttribute(
		"cx",
		element.x + Math.cos(element.angle) * element.radiusX
	);
	element.gradient.setAttribute(
		"cy",
		element.y + Math.sin(element.angle) * element.radiusY
	);
}

function getGradient(element) {
	var stroke = element.getAttribute("stroke");
	var gradient = document.querySelector(stroke.substring(4, stroke.length - 1));
	return gradient;
}