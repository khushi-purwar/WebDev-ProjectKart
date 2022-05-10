function getInputValue() {
  var inputVal = document.getElementById("userinput").value;

  if (isEvil(inputVal)) {
    document.getElementById("result").value = "Evil Number";
  }
  else {
    document.getElementById("result").value = "Not an Evil Number";
  }
}

function isEvil(num) {
  num = parseInt(num);
  var result = num.toString(2);
  var sum = 0;
  for(var i=0;i<result.length;i++){
    if(result.charAt(i) == '1'){
      sum = sum + 1;
    }
  }
  if(sum % 2 == 0){
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