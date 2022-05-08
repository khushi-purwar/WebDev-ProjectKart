function getInputValue() {
  var inputVal = document.getElementById("userinput").value;
  
  if (harshad(inputVal)) {
    document.getElementById("result").value = "Harshad Number";
  }
  else {
    document.getElementById("result").value = "Not a Harshad Number";
  }
}

function harshad(n) {
  var copy = n;
  var sum = 0;
    while(n > 0){
        var rev = n %10;
        sum = sum + rev;
        n = Math.floor(n/10);
    }
    if(copy % sum == 0){
      return true;
    }
    else{
      return false;
    }
}





function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}