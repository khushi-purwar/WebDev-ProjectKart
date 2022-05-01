const boardElement = document.querySelector(".board");
const squareElements = document.querySelectorAll(".square");
const overlayElement = document.querySelector(".overlay");
const lottiePlayer = document.querySelector("lottie-player");
const greet = document.querySelector(".greet");
const greetDescription = document.querySelector(".greet-description");

let isXNext = false;
let squares = Array(9).fill(null);
let winner = null;

function handleClick(e, i) {
    if (squares[i] === null && winner === null) {
        squares[i] = isXNext ? 'X' : 'O';
        isXNext = !isXNext;
        e.innerHTML = squares[i];
    }
    winner = calculateWinner(squares);
    if (winner) {
        lottiePlayer.load("https://assets10.lottiefiles.com/packages/lf20_iijuwalz/data.json");
        lottiePlayer.style.height = "16rem";
        lottiePlayer.style.width = "16rem";
        lottiePlayer.style.margin = "0rem";

        greet.textContent = "Congratulations!";
        greetDescription.textContent = `${winner} won the game. Bhai party 🎉!`;
        overlayElement.style.display = "grid";
    } else if (!squares.includes(null)) {
        lottiePlayer.load("https://assets4.lottiefiles.com/packages/lf20_kyqRXF.json");
        lottiePlayer.style.height = "10rem";
        lottiePlayer.style.width = "10rem";
        lottiePlayer.style.margin = "3rem";

        greet.textContent = "Holy shit, it's draw!";
        greetDescription.textContent = "Koi nhi hota hai!";
        overlayElement.style.display = "grid";
    }
}

function resetGame() {
    isXNext = false;
    squares = Array(9).fill(null);
    winner = null;
    squareElements.forEach(square => {
        square.textContent = "";
    })
    overlayElement.style.display = "none";

}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}