function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    var palin = "";
    for(var i=inputVal.length -1;i >=  0;i--){
            palin = palin + inputVal.charAt(i);
    }
    if(palin == inputVal) {
         document.getElementById("result").value = "Palindrome"; 
    }
    else{
        document.getElementById("result").value = "Not Palindrome"; 
    }

        

}

function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}