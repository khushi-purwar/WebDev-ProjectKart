function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    if(toString(inputVal).length >= 4){
        var strontio  = inputVal * 2;
        strontio = Math.floor(strontio  / 10);
        var tens = Math.floor(strontio  % 10);
        strontio = Math.floor(strontio  / 10); 
        var hundred = Math.floor(strontio  % 10);
        if(tens == hundred) {
             document.getElementById("result").value = "Strontio Number"; 
        }
        else{
            document.getElementById("result").value = "Not a Strontio Number"; 
        }
    }
    else{
        document.getElementById("result").value = "Not a Strontio Number"; 
    }
   

        

}

function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}