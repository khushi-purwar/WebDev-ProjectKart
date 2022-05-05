function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    if(automorphic(inputVal)){
        document.getElementById("result").value = "Automorphic Number";
    }
    else{
        document.getElementById("result").value = "Not an Automorphic Number";
    }
}

function automorphic(n) {
  var c = n;
  var count = 0;
  var square = n*n;
  while(c>0){
     count++;
     c = Math.floor( c/10);
  }
  var power = parseInt( Math.pow(10,count));
  var final_number = square % power;
   if(n == final_number){
     return true;
   }
   else{
     return false;
   }
  }
  
   

        



function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}