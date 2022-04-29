function getInputValue(){  
    var inputVal =  document.getElementById("userinput").value;
    var neon = inputVal * inputVal;
    var input = inputVal;
    var final_number = 0;
    var temp = 0;
    while(neon > 0.0){
          temp = neon%10;
          final_number = final_number + temp;
          neon = Math.floor(neon / 10);
    }
    if(input == final_number) {
         document.getElementById("result").value = "Neon Number"; 
    }
    else{
        document.getElementById("result").value = "Not a Neon Number"; 
    }

        

}

function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}