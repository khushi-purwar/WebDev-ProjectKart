const mostRecentScore = localStorage.getItem('mostRecentScore');


var finalScore = document.getElementById('finalScore');

if (mostRecentScore < 6) {
    finalScore.innerText = `YOU SCORED ${mostRecentScore} OUT OF 10 LOL Better Luck Next Time`;
}
else if (mostRecentScore >= 6) {

    finalScore.innerText = `YOU SCORED ${mostRecentScore} OUT OF 10 Good Game`;
}