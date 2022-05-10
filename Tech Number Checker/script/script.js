function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    if(isTech(inputVal)){
        document.getElementById("result").value = "Tech Number";
    }
    else{
        document.getElementById("result").value = "Not a Tech Number";
    }
}

function isTech(n) {
   var length = n.length;
   if(length%2!=0){
     return false;
   }
   var len1 = length /2 ;
   var num1 = Math.floor(n / Math.pow(10,len1));
   var num2 = n % Math.pow(10,len1);
   var sq = (num1 + num2)*(num1 + num2);
   if(n == sq){
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