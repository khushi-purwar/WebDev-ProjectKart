for (var i = 0; i < 8; i++) {
    document.querySelectorAll(".guitar-button")[i].addEventListener("click", function() {
      var buttonLetter = this.innerHTML;
      makeSound(buttonLetter);
      buttonAnnimation(buttonLetter);
    });
  }
  
  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnnimation(event.key);
  });
  
  function buttonAnnimation(currentkey) {
    var active = document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function() {
      active.classList.remove("pressed")
    }, 100);
  }
  
  function makeSound(key) {
    switch (key) {
      case "E":
        var audio = new Audio('sounds/chordE.mp3');
        audio.play();
        break;
      case "B":
        var audio = new Audio('sounds/chordB.mp3');
        audio.play();
        break;
      case "G":
        var audio = new Audio('sounds/chordG.mp3');
        audio.play();
        break;
      case "D":
        var audio = new Audio('sounds/chordD.mp3');
        audio.play();
        break;
      case "A":
        var audio = new Audio('sounds/chordA.mp3');
        audio.play();
        break;
      case "F":
        var audio = new Audio('sounds/chordF.mp3');
        audio.play();
        break;
      case "C":
        var audio = new Audio('sounds/chordC.mp3');
        audio.play();
        break;
      case "Dm":
        var audio = new Audio('sounds/chordDm.mp3');
        audio.play();
        break;
  
      default:
  
    }
  
  }
  