function getInputValue(){  
    var n1 = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (n1.match(validRegex)) {
        document.getElementById("result").value = "Email is valid"; 
      }
      else{
        document.getElementById("result").value = "Email is not valid"; 
      }
     
         
}

function reset(){
    document.getElementById("email").value = ""; 
    document.getElementById("result").value = ""; 
}