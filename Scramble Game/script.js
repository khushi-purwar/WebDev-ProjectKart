const messg = document.querySelector(".messg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWrd = "";
let randmWord = "";
let RealWord = [
  "python",
  "javascript",
  "c++",
  "django",
  "java",
  "c#",
  "html",
  "css",
  "reactjs",
  "angular",
  "swift",
  "nodejs",
  "mysql",
  "expressjs",
];

const CreateNewwrd = () => {

  let ranNum = Math.floor(Math.random() * RealWord.length);
  let newTempwords = RealWord[ranNum];
  // console.log(newTempwords.split(""));
  return newTempwords;
};

const scrambleWords = (arr) => {

  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(i);
    // console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {

    play = true;
    btn.innerHTML = "GUESS";
    guess.classList.toggle("hidden");
    newWrd = CreateNewwrd();
    randmWord = scrambleWords(newWrd.split("")).join("");
    // console.log(randmWord);
    messg.innerHTML = `Guess the word:  ${randmWord}`;
  } else {

    let tempWord = guess.value;
    if (tempWord === newWrd) {

      play = false;
      messg.innerHTML = `Yayy it's correct. it is ${newWrd}`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      messg.innerHTML = `Oops!! It's incorrect, try again?? Hint : (It is a web based Tech) ${randmWord}`;
    }
  }
});
