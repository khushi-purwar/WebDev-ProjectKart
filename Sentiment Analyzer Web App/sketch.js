let sentiment;

let inputText = document.getElementById("input");
let upload = document.getElementById("upload");

let prediction = document.getElementById("prediction_score");
let result = document.getElementById("results");
let enterText = document.querySelector("#enterText");

function setup() {
  // initialize sentiment
  sentiment = ml5.sentiment("movieReviews", modelReady);

  // setup the html environment
  prediction_score = document.querySelector("#statusText");
  prediction_score.innerHTML = "Loading Model...";

  results.innerHTML = "Sentiment Analysis Loading ...";

  // predicting the sentiment on mousePressed()
  enterText.addEventListener("click", getSentiment);
}

inputText.onchange = function () {
  setup();
};

function getSentiment() {
  // get the values from the input
  const text = inputText.value;
  // make the prediction
  const prediction = sentiment.predict(text);

  console.log(prediction);

  // display sentiment result on html page
  if (prediction.score > 0.5)
    results.innerHTML =
      "The sentiment is predicted to be " +
      prediction.score * 100 +
      "% positive ";
  else
    results.innerHTML =
      "The sentiment is predicted to be " +
      (1 - prediction_score) * 100 +
      "% negative";
}

function modelReady() {
  // model is ready
  prediction_score.innerHTML = "model loaded";
}
