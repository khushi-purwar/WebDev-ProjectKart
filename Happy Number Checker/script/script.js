function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    if(isHappy(inputVal)){
        document.getElementById("result").value = "Happy Number";
    }
    else{
        document.getElementById("result").value = "Not a Happy Number";
    }
}

function isHappy(n) {
    let sum = 0;
    while (n > 0) {
      let e = n % 10;
      n = Math.floor(n / 10);
      sum += e * e;
    }
    if (sum === 1) {
      return true;
    } else if (sum > 1 && sum <= 4) {
      return false;
    }
    return isHappy(sum);
  }
  
   

        



function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}