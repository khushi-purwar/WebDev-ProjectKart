var svg = document.getElementById("sunExplorer");
var sunAngle = 0;
var houseAngle = 0;
var mouseX = 0;
var mouseY = 0;
var earthMax = 23.5;
var houseMax = 90;
var earthRadians = earthMax * (Math.PI / 180);
var houseRadians = houseMax * (Math.PI / 180);
var cursorPoint = svg.createSVGPoint();
var sun = document.querySelector("#sun");
var house = document.querySelector("#house");
var sunDegreesText = document.querySelector("#sunDegrees");
var houseDegreesText = document.querySelector("#houseDegrees");
var pattern = document.querySelector("#pattern");
var angleOffset = 0;
sun.addEventListener("mousedown", onSunDown);

house.addEventListener("mousedown", onHouseDown);

function onSunDown(e) {
  updateMouse(e);
  angleOffset =
    Math.min(
      Math.max(Math.atan2(mouseY - 300, mouseX), -earthRadians),
      earthRadians
    ) - sunAngle;
  addEventListener("mousemove", onSunDrag);
  window.addEventListener("mouseup", onSunUp);
}

function onSunUp(e) {
  removeEventListener("mousemove", onSunDrag);
  window.removeEventListener("mouseup", onSunUp);
}

function onSunDrag(e) {
  updateMouse(e);
  sunAngle = Math.min(
    Math.max(Math.atan2(mouseY - 300, mouseX) - angleOffset, -earthRadians),
    earthRadians
  );
  var degrees = -sunAngle * (180 / Math.PI);
  sunDegreesText.textContent = Math.abs(degrees).toFixed(0) + "°";
  TweenMax.set("#sun", {
    rotation: -degrees,
    x: Math.cos(sunAngle) * 700 - 700,
    y: Math.sin(sunAngle) * 700,
    transformOrigin: "50% 50%"
  });
  TweenMax.set("#pattern", {
    attr: { patternTransform: `rotate(${-degrees})` }
  });
  TweenMax.set(sunDegreesText, {
    rotation: degrees,
    transformOrigin: "50% 50%"
  });
}

function onHouseDown(e) {
  updateMouse(e);
  angleOffset =
    Math.min(
      Math.max(Math.atan2(mouseY - 300, mouseX), -houseRadians),
      houseRadians
    ) - houseAngle;
  addEventListener("mousemove", onHouseDrag);
  window.addEventListener("mouseup", onHouseUp);
}

function onHouseUp(e) {
  removeEventListener("mousemove", onHouseDrag);
  window.removeEventListener("mouseup", onHouseUp);
}

function onHouseDrag(e) {
  updateMouse(e);
  houseAngle = Math.min(
    Math.max(Math.atan2(mouseY - 300, mouseX) - angleOffset, -houseRadians),
    houseRadians
  );
  var degrees = -houseAngle * (180 / Math.PI);
  houseDegreesText.textContent = Math.abs(degrees).toFixed(0) + "°";
  TweenMax.set(["#house", "#houseStroke"], {
    rotation: -degrees,
    svgOrigin: "0 300"
  });
  TweenMax.set(houseDegreesText, {
    rotation: degrees,
    transformOrigin: "50% 50%"
  });
}

function updateMouse(e) {
  cursorPoint.x = e.clientX;
  cursorPoint.y = e.clientY;
  cursorPoint = cursorPoint.matrixTransform(svg.getScreenCTM().inverse());
  mouseX = cursorPoint.x;
  mouseY = cursorPoint.y;
}