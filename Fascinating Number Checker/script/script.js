function getInputValue() {
  var inputVal = document.getElementById("userinput").value;

  if (isFascinating(inputVal)) {
    document.getElementById("result").value = "Fascinating Number";
  }
  else {
    document.getElementById("result").value = "Not a Fascinating Number";
  }
}

function isFascinating(num) {

  let freq = new Array(10);
  for (let i = 0; i < freq.length; i++) {
    freq[i] = 0;
  }

  let val = "" + num + num * 2 + num * 3;

  
  for (let i = 0; i < val.length; i++) {

   
    let digit = val[i].charCodeAt(0) -
      '0'.charCodeAt(0);

    
    if (freq[digit] > 0 && digit != 0)
      return false;
    else
      freq[digit]++;
  }

  
  for (let i = 1; i < freq.length; i++) {
    if (freq[i] == 0)
      return false;
  }
  return true;
}







function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}