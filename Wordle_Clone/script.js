const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const wordForTheDay = "guest";
const wordElements = document.querySelectorAll('.word-row');
let gameOver = false;
let guessedCorrecty = false;

buttonElements.forEach((element) => {
    element.addEventListener('click' , function() {
    keypress(element.attributes["data-key"].value)
    });
});


function populateWord(key) {
    if (letter < 6) {
        wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
        letter+=1;
    }
}

function checkWord() {
    const letterElements = wordElements[row - 1].querySelectorAll('.word');

    let numberOfCorrectAlphabets = 0;

    letterElements.forEach((element , index) => {
        const indexOfLetterInWordOfDay = wordForTheDay.toLocaleLowerCase().indexOf(element.innerText.toLowerCase());
        console.log(indexOfLetterInWordOfDay);

        if (indexOfLetterInWordOfDay === index) {
            numberOfCorrectAlphabets +=1;
            element.classList.add('word-green');
        } else if (indexOfLetterInWordOfDay > 0) {
            element.classList.add('word-yellow');
        } else {
            element.classList.add('word-grey')
        }
    });

    if (numberOfCorrectAlphabets === 5) {
        gameOver = true;
        guessedCorrecty = true;
        alert('Congratulations! You have guessed the word of the day.')
    } else if (row === 6) {
        gameOver = true;
        alert('Better Luck next time. The word was : ' + wordForTheDay)
    }
}

function enterWord() {
    if (letter < 6) {
        alert('Not enough letters');
    } else{
        checkWord();
        row+=1;
        letter = 1;
    }
}

function deleteLetter() {
    const letterElements = wordElements[row - 1].querySelectorAll('.word');

    for (let index = letterElements.length - 1; index >= 0; index--) {
        const element = letterElements[index];
        if (element.innerText !== '') {
            element.innerText = '';
            letter -=1 ;
            break;
        }
        
    }
}

function keypress(key) {
    if (!gameOver) {
        if (key.toLowerCase() === 'enter') {
            enterWord();
        } else if (key.toLowerCase() === 'del') {
            deleteLetter();
        } else {
            populateWord(key);
        }
    } else {
        alert('Game Over ! Please play again tomorrow and guess a new word.')
    }
    
}


