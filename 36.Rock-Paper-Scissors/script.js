// Rock paper and scissors

const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    //button for fade in and fadeout
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll('.hands img');


    hands.forEach(hands => {
      hands.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    })

    //computer options
    const computerOptions = ["Rock", "Paper", "Scissors"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //calling comparehands
          compareHands(this.textContent, computerChoice);

          //update images
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
        }, 2000);

        // Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }

  const compareHands = (playerChoice, computerChoice) => {

    //update text
    const winner = document.querySelector(".winner");

    //checking for tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";

      return;
    }

    //check for rock
    if (playerChoice === "Rock") {
      if (computerChoice === "Scissors") {
        winner.textContent = "You Win !!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }


    //check for paper
    if (playerChoice === "Paper") {
      if (computerChoice === "Scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Win !!";
        pScore++;
        updateScore();
        return;
      }
    }


    //check for scissors
    if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Win !!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //  call the inner function

  startGame();
  playMatch();
};

// start the game function
game();