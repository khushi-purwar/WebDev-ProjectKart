score = 0;
cross = true;

audiobg = new Audio("assets/audio/music.mp3");
audiogo = new Audio("assets/audio/gameover.mp3");
setTimeout(() => {
  audiobg.play();
}, 700);

document.onkeydown = function (e) {
  console.log("Key Code is: ", e.keyCode);
  if (e.keyCode == 38) {
    Mario = document.querySelector(".Mario");
    Mario.classList.add("animateMario");
    setTimeout(() => {
      Mario.classList.remove("animateMario");
    }, 500);
  }
  if (e.keyCode == 39) {
    Mario = document.querySelector(".Mario");
    MarioX = parseInt(
      window.getComputedStyle(Mario, null).getPropertyValue("left")
    );
    Mario.style.left = MarioX + 150 + "px";
  }
  if (e.keyCode == 37) {
    Mario = document.querySelector(".Mario");
    MarioX = parseInt(
      window.getComputedStyle(Mario, null).getPropertyValue("left")
    );
    Mario.style.left = MarioX - 150 + "px";
  }
};

setInterval(() => {
  Mario = document.querySelector(".Mario");
  gameOver = document.querySelector(".gameOver");
  Enemy = document.querySelector(".Enemy");

  dx = parseInt(window.getComputedStyle(Mario, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(Mario, null).getPropertyValue("top"));

  ox = parseInt(window.getComputedStyle(Enemy, null).getPropertyValue("left"));
  oy = parseInt(window.getComputedStyle(Enemy, null).getPropertyValue("top"));

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetX < 90 && offsetY < 60) {
    gameOver.innerHTML = "Game Over: Reload to Start Again";
    Enemy.classList.remove("animateEnemy");
    audiogo.play();
    setTimeout(() => {
      audiobg.pause();
      audiogo.pause();
    }, 1000);
  } else if (offsetX < 130 && cross) {
    score += 1;
    scoreUpdate(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(Enemy, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.3;
      Enemy.style.animationDuration = newDur + "s";
    }, 300);
  }
}, 10);

function scoreUpdate(score) {
  Score.innerHTML = "Your Score is: " + score;
}
