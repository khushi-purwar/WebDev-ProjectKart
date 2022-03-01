var NumOfDrum = document.querySelectorAll(".btn").length;
for (var i = 0; i < NumOfDrum; i++) {

    document.querySelectorAll(".btn")[i].addEventListener("click", OnClick);

    function OnClick() {
        var char = this.innerHTML;
        makeSound(char);
        animation(char);
    }
}

document.addEventListener("keypress" , KeyboardKey);

function KeyboardKey(event){
    makeSound(event.key);
    animation(event.key);
}

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

            case "a":
            var bass = new Audio("./sounds/kick-bass.mp3");
            bass.play();
            break;

            case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

            case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;

            case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;

            case "k":
            var tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;

            case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function animation(CurrentKey){
    var activeButton=document.querySelector("." + CurrentKey +"-btn");
    activeButton.classList.add("active");
    setTimeout(function(){
        activeButton.classList.remove("active");
    }, 100);
}