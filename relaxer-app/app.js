const circleProgress = document.querySelector('.circle_progress');
const times = document.querySelector('.time_input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const timeText = document.querySelector('.times_text');
let timeLeft = 3;
 
//changed by the user
times.addEventListener("change", () => {
   timeLeft = times.value;
   timeText.innerText = timeLeft;
});

//circle changing
const growCircle = () => {
  circleProgress.classList.add('circle_grow');
  setTimeout(() => {
    circleProgress.classList.remove('circle_grow');
  }, 8000);
};

//instruction
const instructionUpdate = () =>{
  timeLeft--;
  timeText.innerText = timeLeft;
  instructions.innerText = "Breath in";
  setTimeout(() => {
    instructions.innerText = "Hold your breath..";
    setTimeout(() => {
      instructions.innerText = "Exhale your breath slowly.."
    }, 4000);
  }, 4000);
};

//functioning
const medAppfunction = () =>{
  const appAnimation = setInterval(() => {
    if(timeLeft === 0){
      clearInterval(appAnimation);
      instructions.innerText = "Meditation is completed. Click to begin.."
      start.classList.remove("button-inactive");
      timeText.innerText = "Select Time";
      return;
    }
    growCircle();
    instructionUpdate();
  }, 12000);
};

//start time
start.addEventListener("click", () =>{
  start.classList.add("button-inactive");
  instructions.innerText = "Get relaxed"
  setTimeout(()=>{
    instructions.innerText = "Meditation is about to begin.."
    setTimeout(()=>{
     growCircle();
     instructionUpdate();
     medAppfunction();
    }, 2000);
  }, 2000);
});