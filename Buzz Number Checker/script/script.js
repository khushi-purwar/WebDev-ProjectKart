function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    var input = inputVal;
    var buzz = inputVal % 10;
    
    if((buzz == 7)||(input % 7 == 0)) {
         document.getElementById("result").value = "Buzz Number"; 
    }
    else{
        document.getElementById("result").value = "Not a Buzz Number"; 
    }

        

}

function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}