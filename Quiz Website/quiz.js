const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName('choice-text'));

const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');

const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');


// console.log(choices);

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
var secs = 50;
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;
let questions = [
    {
        "questionId": 1,
        "question": "Grand Central Terminal, Park Avenue, New York is the world's",
        "optionA": "Largest railway station",
        "optionB": "Highest railway station",
        "optionC": "Longest railway station",
        "optionD": "None of the above",
        "correctOption": "A"
    },
    {
        "questionId": 2,
        "question": "Entomology is the science that studies",
        "optionA": "Behavior of human beings",
        "optionB": "Insects",
        "optionC": "The origin and history of technical and scientific terms",
        "optionD": "The formation of rocks",
        "correctOption": "B"
    },
    {
        "questionId": 3,
        "question": "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        "optionA": "Asia",
        "optionB": "Africa",
        "optionC": "Europe",
        "optionD": "Australia",
        "correctOption": "B"
    },
    {
        "questionId": 4,
        "question": "For which of the following disciplines is Nobel Prize awarded?",
        "optionA": "Physics and Chemistry",
        "optionB": "Physiology or Medicine",
        "optionC": "Literature, Peace and Economics",
        "optionD": "All of the above",
        "correctOption": "D"
    },
    {
        "questionId": 5,
        "question": "Fire temple is the place of worship of which of the following religion?",
        "optionA": "Taoism",
        "optionB": "Judaism",
        "optionC": "Zoroastrianism (Parsi Religion)",
        "optionD": "Shintoism",
        "correctOption": "C"
    },
    {
        "questionId": 6,
        "question": "DRDL stands for",
        "optionA": "Defence Research and Development Laboratory",
        "optionB": "Department of Research and Development Laboratory",
        "optionC": "Differential Research and Documentation Laboratory",
        "optionD": "None of the above",
        "correctOption": "A"
    },
    {
        "questionId": 7,
        "question": "Who was the first Indian Chief of Army Staff of the Indian Army ?",
        "optionA": "Gen. K.M. Cariappa",
        "optionB": "Vice-Admiral R.D. Katari",
        "optionC": "Gen. Maharaja Rajendra Singhji",
        "optionD": "None of the above",
        "correctOption": "A"
    },
    {
        "questionId": 8,
        "question": "First Afghan War took place in the year",
        "optionA": "1848",
        "optionB": "1843",
        "optionC": "1833",
        "optionD": "1839",
        "correctOption": "D"
    },
    {
        "questionId": 9,
        "question": "Georgia, Uzbekistan and Turkmenistan became the members of UNO in",
        "optionA": "1991",
        "optionB": "1992",
        "optionC": "1993",
        "optionD": "1994",
        "correctOption": "B"
    },
    {
        "questionId": 10,
        "question": "During World War I, Germany was defeated in the Battle of Verdun on the western front and Romania declared war on the eastern front in the year",
        "optionA": "1914 AD",
        "optionB": "1915 AD",
        "optionC": "1916 AD",
        "optionD": "1917 AD",
        "correctOption": "C"
    }
]



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
}

questionCounter = 0;
getNewQuestion = () => {

    if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign("/score.html");
    }


    questionCounter++;
    // questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS

    progressText.innerText = `QUESTION ${questionCounter}/${MAX_QUESTIONS}`

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    // const questionIndex = questions[questionCounter]["questionId"];
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        // console.log(number);
        choice.innerText = currentQuestion['option' + number]

    })
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};


// var id = 0;
// function calc() {
//     document.getElementById('timer').innerHTML = secs;
//     secs -= 1;
//     if (secs == 0)
//         return window.location.assign("/score.html");


// }
// function start() {
//     id = window.setInterval(calc, 1500);
// }


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        // console.log(e.target);
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        var classToApply = "incorrect";

        if (selectedAnswer == currentQuestion.correctOption) {
            classToApply = "correct";
        }
        if (classToApply == 'correct') {
            // score = score + 3;
            // scoreText.innerText = score;
            incrementScore(CORRECT_BONUS);
            // progressBarFull.style.backgroundColor = "red";

        }


        console.log(classToApply);
        console.log(selectedAnswer == currentQuestion.correctOption);





        console.log(selectedAnswer);


        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000)
    })
})
// for (var i = 0; i < questions.length; i++)
//     console.log(questions[i]["questionId"]);

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


startGame();
