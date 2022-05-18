function getInputValue() {
  var inputVal = document.getElementById("userinput").value;
  
  if (reverse(inputVal)) {
    document.getElementById("result").value = "Twisted Prime Number";
  }
  else {
    document.getElementById("result").value = "Not a Twisted Prime Number";
  }
}

function reverse(n){
var copy = n;
var rev = 1;
var r = 0;
while(copy>0){
    rev = copy % 10;
    r = r * 10 + rev;
    copy = Math.floor(copy / 10);
}

if(prime(r) && prime(n)){
  return true;
}
else{
  return false;
}

}

function prime(n) {
var count = 0;
for(var i =1 ; i <= n;i++){
  if(n % i == 0){
    count++;
  }

}
if(count == 2){
  return true;
}
else{
  return false;
}
}





function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}