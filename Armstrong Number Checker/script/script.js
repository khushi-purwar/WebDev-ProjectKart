function getInputValue(){ 
var inputVal =  document.getElementById("userinput").value;
let sum = 0;
const number = inputVal;
let temp = inputVal;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}

if (sum == number) {
    document.getElementById("result").value = "Armstrong Number"; 
}
else {
    document.getElementById("result").value = "Not an Armstrong Number"; 
}

        

}

function reset(){
    document.getElementById("userinput").value = ""; 
    document.getElementById("result").value = ""; 
}