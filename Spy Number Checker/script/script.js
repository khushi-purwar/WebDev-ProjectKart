function getInputValue() {
  var inputVal = document.getElementById("userinput").value;
  
  if (spy(inputVal)) {
    document.getElementById("result").value = "Spy Number";
  }
  else {
    document.getElementById("result").value = "Not a Spy Number";
  }
}

function spy(n) {
  var copy = n;
  var sum = 0;
  var product = 1;
    while(n > 0){
        var rev = n %10;
        sum = sum + rev;
        n = Math.floor(n/10);
    }
    while(copy > 0){
      var r = copy %10;
      product = product * r;
      copy = Math.floor(copy/10);
  }
    if(sum == product){
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