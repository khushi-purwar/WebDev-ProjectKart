for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
      var buttonName = this.innerHTML;
      makesound(buttonName);
      buttonAnnimation(buttonName);
    });
  }
  
  document.addEventListener("keypress" , function(event){
    makesound(event.key);
    buttonAnnimation(event.key);
  });
  
  function buttonAnnimation(currentkey){
    var active = document.querySelector("."+ currentkey);
    active.classList.add("pressed");
    setTimeout(function(){
      active.classList.remove("pressed");
    },100)
  }
  
  function makesound(key) {
    switch (key) {
      case "C":
        var audio = new Audio("sounds/c.mp3");
        audio.play();
        break;
      case "D":
        var audio = new Audio("sounds/d.mp3");
        audio.play();
        break;
      case "E":
        var audio = new Audio("sounds/e.mp3");
        audio.play();
        break;
      case "F":
        var audio = new Audio("sounds/f.mp3");
        audio.play();
        break;
      case "G":
        var audio = new Audio("sounds/g.mp3");
        audio.play();
        break;
      case "A":
        var audio = new Audio("sounds/a.mp3");
        audio.play();
        break;
      case "B":
        var audio = new Audio("sounds/b.mp3");
        audio.play();
        break;
      default:
  
    }
  }
  