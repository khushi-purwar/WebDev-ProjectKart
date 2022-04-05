function getInputValue(){  
    var inputVal = document.getElementById("units").value;
    var name = document.getElementById("username").value;
    if(name!=''){ 
        var units = parseInt(inputVal);
        console.log(units)
        if(isNaN(units)==false){  
            bill = 0;
            if((units <= 50)){
            bill  = units*1;
            }
            else if((units > 50)&&(units <= 150)){
                bill = 50*1 + (units-50)*5;
            }
            else if((units > 150) && (units <= 250)){
            bill = 50*1 + 100*2 + (units-150)*5;
            }
            else if((units > 250) && (units <= 350)){
            bill = 50*1 + 100*2 + 100*5 + (units-250)*7;
            }
            else if((units > 350) && (units <= 450)){
            bill = 50*1 + 100*2 + 100*5 + 100*7 + (units-350)*9;
            }
            else{
                bill = 50*1 + 100*5 + 100*7 + 100*9 + (units-450)*10;
            }



            if(bill>750){
            bill = bill - bill*0.2;
            }

            document.getElementById("result").value = bill; 
            alert(name+" You have a Due of : ₹"+bill);
        }
        else{
            alert("Enter a valid number!")
        }
  }
    else{
        alert("Enter your name!")
    }

   
}
function reset(){
    document.getElementById("username").value = ""; 
    document.getElementById("units").value = ""; 
    document.getElementById("result").value = "0.0"; 
}