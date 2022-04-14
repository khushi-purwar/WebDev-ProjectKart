
var count = parseInt(document.getElementById("count"));
count = 0;
var final_count = 0;

function add() {


count++;
if (count < 1) {
  final_count = "00";
}
else {
  if (count < 10) {
    final_count = "" + "0" + count ;
  }
  else {
    final_count = count + "";
  }

  document.getElementById("count").innerHTML = final_count;

}

}

function remove() {
  if(count >0){
    count--;
    if (count < 1) {
      document.getElementById("count").innerHTML = "00";
    }
    else {
      if (count < 10) {
        final_count = "" + "0" + count ;
      }
      else {
        final_count = count + "";
      }
    
      document.getElementById("count").innerHTML = final_count;
    
    }
  }
  
  }