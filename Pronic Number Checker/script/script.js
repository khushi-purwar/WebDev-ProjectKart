function getInputValue() {
  var inputVal = document.getElementById("userinput").value;
  
  if (pronic(inputVal)) {
    document.getElementById("result").value = "Pronic Number";
  }
  else {
    document.getElementById("result").value = "Not a Pronic Number";
  }
}

function pronic(n) {
  for(var i = 1;i<=n;i++){
    if(i*(i+1) == n){
      return true;
    }
  }
  return false;
}





function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}