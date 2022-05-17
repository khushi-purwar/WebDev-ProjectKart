const WORK_IT = new Audio("./audio/WORK_IT.wav");
const MAKE_IT = new Audio("./audio/MAKE_IT.wav");
const DO_IT = new Audio("./audio/DO_IT.wav");
const MAKES_US = new Audio("./audio/MAKES_US.wav");
const HARDER = new Audio("./audio/HARDER.wav");
const BETTER = new Audio("./audio/BETTER.wav");
const FASTER = new Audio("./audio/FASTER.wav");
const STRONGER = new Audio("./audio/STRONGER.wav");
const MORE_THAN = new Audio("./audio/MORE_THAN.wav");
const HOUR= new Audio("./audio/HOUR.wav");
const OUR= new Audio("./audio/OUR.wav");
const NEVER= new Audio("./audio/NEVER.wav");
const EVER= new Audio("./audio/EVER.wav");
const AFTER= new Audio("./audio/AFTER.wav");
const WORK_IS= new Audio("./audio/WORK_IS.wav");
const OVER= new Audio("./audio/OVER.wav");

const orderedAudioObject = {
    a: WORK_IT,
    b: MAKE_IT,
    c: DO_IT,
    d: MAKES_US,
    e: HARDER,
    f: BETTER,
    g: FASTER,
    h: STRONGER,
    i: MORE_THAN,
    j: HOUR,
    k: OUR,
    l: NEVER,
    m: EVER,
    n: AFTER,
    o: WORK_IS,
    p: OVER
}

function activateAudioBasedOnKey(key) {
    if(orderedAudioObject[key])
    orderedAudioObject[key].play()
}

window.addEventListener("keydown", (e) => {
    const pressedKey = e.key.toLowerCase();
    activateAudioBasedOnKey(pressedKey)      
})

const musicalButtons = document.querySelectorAll("ul li button");

for (let x = 0; x < musicalButtons.length; x++){
    const currentButton = musicalButtons[x];
    const key = currentButton.getAttribute("data-key");
    currentButton.addEventListener("click", activateAudioBasedOnKey.bind(this,key));
}