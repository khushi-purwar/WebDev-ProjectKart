const textA = document.querySelector("textarea"),
  convertBtn = document.querySelector("button"),
  vList = document.querySelector("select");

let synth = speechSynthesis,
  isSpeaking = true;

function voices() {
  for (let voice of synth.getVoices()) {
    let selec =
      voice.name === "Microsoft David - English (United States)"
        ? "selected"
        : "";
    let opts = `<option value = "${voice.name}" ${selec}>${voice.name}(${voice.lang})</option>`;
    vList.insertAdjacentHTML("beforeend", opts);
  }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(txt) {
  let utter = new SpeechSynthesisUtterance(txt);
  for (let voice of synth.getVoices()) {
    if (voice.name === vList.value) {
      utter.voice = voice;
    }
  }
  speechSynthesis.speak(utter);
}

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textA != "") {
    if (!synth.speaking) {
      textToSpeech(textA.value);
    }
    if (textA.value.length > 80) {
      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        convertBtn.innerText = "Pause";
      } else {
        synth.pause();
        isSpeaking = true;
        convertBtn.innerText = "Resume";
      }
      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          convertBtn.innerText = "Convert To Speech";
        }
      });
    }
  }
  else{
    convertBtn.innerText = "Convert To Speech";

  }
});
