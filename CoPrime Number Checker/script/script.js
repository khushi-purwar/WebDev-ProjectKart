function getInputValue() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if (gcd(num1,num2) == 1) {
    document.getElementById("result").value = "CoPrime Numbers";
  }
  else {
    document.getElementById("result").value = "Not CoPrime Numbers";
  }
}

function gcd(a, b) {
  if (a == 0)
      return b;
  return gcd(b % a, a);
}







function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}