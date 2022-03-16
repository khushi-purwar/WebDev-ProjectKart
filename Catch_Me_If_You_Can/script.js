var cur = "Element";
   
var shape = [
  "Element",
  "rectangle",
  "circle",
  "oval",
  "triangle-up",
  "triangle-down",
  "triangle-topleft",
  "triangle-bottomleft",
  "triangle-bottomright",
  "triangle-right"
];

var x=0;

var abc=document.getElementById("Element").onmouseover = function () {
  var rand = shape[Math.floor(Math.random() * shape.length)];
  document.getElementById(cur).setAttribute("id", rand);
  cur = rand;

 
  x++;
  // Determining current status
  if  (cur ==="triangle-bottomright"){
    
    if (x<=5){
        document.getElementById('head').innerHTML= 'STATUS: you win';
       
    }
    else{
        document.getElementById("head").innerHTML= 'STATUS: you loose';
    }
     }
else{
  document.getElementById("head").innerHTML= 'STATUS: keep going';
}
};
