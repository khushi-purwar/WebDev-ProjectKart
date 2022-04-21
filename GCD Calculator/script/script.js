function getInputValue(){  
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;


    var result_gcd = gcd(n1,n2);
    document.getElementById("result").value = result_gcd; 
   
}

function gcd(a, b) {
    if (b == 0)
      return a;
    else
      return gcd(b, (a % b));
  }

function reset(){
    document.getElementById("number1").value = ""; 
    document.getElementById("number2").value = ""; 
    document.getElementById("result").value = "0.0"; 
}