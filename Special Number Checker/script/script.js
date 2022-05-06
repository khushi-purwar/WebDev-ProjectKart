function getInputValue() {
  var inputVal = document.getElementById("userinput").value;
  
  if (special(inputVal)) {
    document.getElementById("result").value = "Special Number";
  }
  else {
    document.getElementById("result").value = "Not a Special Number";
  }
}

function special(n) {
  var sum = 0;
  var copy = n;
    while(n > 0){
        var rev = n %10;
        sum = sum + factorialize(rev);
        n = Math.floor(n/10);
    }
    if(copy == sum){
      return true;
    }
    else{
      return false;
    }
}

function factorialize(num) {
   if (num == 0)
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}







function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}