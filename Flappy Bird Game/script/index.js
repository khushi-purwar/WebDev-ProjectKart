var pipe = document.getElementById("pipe")
var space = document.getElementById("space")
var bird = document.getElementById("bird")
var jumping = 0
var counter = 0

function repeatPipe() {
    var random = -((Math.random() * 300) + 250)
    space.style.top = random + "px"
    counter++
}
space.addEventListener('animationiteration', repeatPipe)

setInterval(function () {
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if (jumping == 0) {
        bird.style.top = (birdTop + 3) + "px"
    }
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    var spaceTop = parseInt(window.getComputedStyle(space).getPropertyValue("top"));
    var cTop = -(750 - birdTop);
    if ((birdTop > 705) || ((pipeLeft < 60) && (pipeLeft > -80) && ((cTop < spaceTop) || (cTop > spaceTop + 155)))){
        alert("Game Over! Score: " + (counter-1))
        bird.style.top = 300 + "px"
        counter = 0
    }
}, 15)

function jump() {
    jumping = 1
    let jumpCount = 0
    var jumpInterval = setInterval(function () {
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
        if ((birdTop > 6) && (jumpCount < 15)) {
            bird.style.top = (birdTop - 5) + "px"
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval)
            jumping = 0
            jumpCount = 0
        }
        jumpCount++
    }, 15)
}
