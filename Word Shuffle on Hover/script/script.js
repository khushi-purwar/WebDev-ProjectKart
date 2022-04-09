var glitchTexts = [];
var possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/;\[]=-~!@#$%^&*()+{}:?><€¡¥×«»¶¿çµñ©æáßðøöóíúüþéåä";
var glitchStrength = 60; 
var glitchSpeed = 10; 
var glitchDuration = 500;
var glitchLeave = false;
var timeouts = [];

$('.glitch-item').each(function(index, el) {
  var txt = $('a', this).text().trim();
  glitchTexts.push(txt);
});

$('.glitch-item').hover(function() {
  var originalText = glitchTexts[$(this).index() - 1];
  var times = glitchSpeed * (glitchDuration / 1000);
  var charArr = $(this).text().trim().split("");
  var strength = Math.ceil(charArr.length / (100 / glitchStrength));
  for(var i = 0; i < times; i++) {
    var speed = 1000 / glitchSpeed;
    timeouts.push(setTimeout(function(){
      for(var j = 0; j < strength; j++) {
        var randChar = possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
        var indexOfChar = Math.floor(Math.random() * charArr.length);
        charArr[indexOfChar] = randChar;
        var newText = charArr.join("");
        $('a', this).text(newText);
      }
    }.bind(this), (i * speed)));
  };
}, function() {
  if(!glitchLeave) {
    $.each(timeouts, function(i, el){
      clearTimeout(el);
      delete timeouts[i];
    });
    $('a', this).text(glitchTexts[$(this).index() - 1]);
  }
});