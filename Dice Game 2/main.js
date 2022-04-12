

const heading = document.querySelector("h1")
var start = document.getElementById("btn")
var reloadBtn = document.getElementById("reloadBtn")
var score1 = 0;
var score2 = 0;

// console.log(randomNum1, randomNum2)




function startGame() {
    const randomNum1 = Math.floor(Math.random() * 6) + 1;
    const randomNum2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("img1").setAttribute("src", `./images/dice${randomNum1}.png`);
    document.getElementById("img2").setAttribute("src", `./images/dice${randomNum2}.png`);
    if (randomNum1 > randomNum2) {
        heading.innerText = `🚩User Wins!`;
        score1 += 1;
        document.getElementById("score1").innerHTML = `Score: ${score1}`
    } else if (randomNum2 > randomNum1) {
        heading.innerText = `CPU Wins!🚩`;
        score2 += 1;
        document.getElementById("score2").innerHTML = `Score: ${score2}`
    } else {
        heading.innerText = `Draw!`;
        document.getElementById("score1").innerHTML = `Score: ${score1}`
        document.getElementById("score2").innerHTML = `Score: ${score2}`
    }
    // start.innerHTML = `Replay`;
}
function replay() {
    reloadBtn = location.reload();
}

if (start.innerHTML === "Play") {
    start.addEventListener("click", startGame)
}

reloadBtn.addEventListener("click",replay,false)