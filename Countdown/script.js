// caching DOM elements
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownButton = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeElbutton = document.getElementById("complete-button");

// Global values
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownTitle = "";
let countdownDate = "";
let countdownValue = new Date();
let countdownActive;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown / Complete UI
function updateDOM() {
  // console.log("time updated");

  const now = new Date().getTime();
  const distance = countdownValue - now;

  // Hiding input form
  inputContainer.hidden = true;

  // Check if countdown ended
  if (distance < 0) {
    completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
    countdownEl.hidden = true;
    completeEl.hidden = false;
    clearInterval(countdownActive);

    localStorage.removeItem("countdown");
  } else {
    // Show coutdown in progress
    // Populate Countdown
    timeElements[0].textContent = Math.floor(distance / day); // days
    timeElements[1].textContent = Math.floor((distance % day) / hour); // hours
    timeElements[2].textContent = Math.floor((distance % hour) / minute); // minutes
    timeElements[3].textContent = Math.floor((distance % minute) / second); // seconds

    // Countdown title, showing countdown box
    countdownElTitle.textContent = countdownTitle;
    countdownEl.hidden = false;
  }
}

// Take Values from From Input
function updateCountdown(e) {
  e.preventDefault();

  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  // set the new countdown in the localstorage
  localStorage.setItem(
    "countdown",
    JSON.stringify({
      title: countdownTitle,
      date: countdownDate,
    })
  );

  // check for countdownDate
  if (countdownDate === "") {
    alert("Please select a date for the countdown.");
  } else {
    // Get the number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
    countdownActive = setInterval(updateDOM, second);
  }
}

// Reset All Values
function reset(e) {
  // reseting the input form values
  // e.srcElement[0].value = "";
  // e.srcElement[1].value = "";

  // remove countdown from localstorage
  localStorage.removeItem("countdown");

  // swaping the boxes back to input form
  inputContainer.hidden = false;
  completeEl.hidden = true;
  countdownEl.hidden = true;

  // stoping the countdown
  clearInterval(countdownActive);
}

// Get countdown from localStorage if available
function restorePreviousCountdown() {
  const savedCountdown = JSON.parse(localStorage.getItem("countdown"));

  if (savedCountdown) {
    // hiding the input
    inputContainer.hidden = true;

    // retriving from the local storage
    countdownTitle = savedCountdown.title;
    countdownDate = savedCountdown.date;

    // updating the DOM
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
    countdownActive = setInterval(updateDOM, second);
  }
}

// onLoad
restorePreviousCountdown();

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownButton.addEventListener("click", reset);
completeElbutton.addEventListener("click", reset);