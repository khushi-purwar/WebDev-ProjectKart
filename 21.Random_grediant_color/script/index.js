 
 alert("Start Generating Random Background Color.");
 
 // m-1  Advance Mathod to add backgroundColor 
 const ref = document.querySelector(".btn");
 ref.addEventListener("click",() => {
     let x=Math.floor(Math.random()*255);
     let y=Math.floor(Math.random()*255);
     let z=Math.floor(Math.random()*255);
     let a=Math.random().toFixed(2);
     // let a=1;
     bgcol1 = `rgba(${x},${y},${z},${a})`;
     x=Math.floor(Math.random()*255);
     y=Math.floor(Math.random()*255);
     z=Math.floor(Math.random()*255);
     a=Math.random().toFixed(2);
     bgcol2 = `rgba(${x},${y},${z},${a})`;
     x=Math.floor(Math.random()*255);
     y=Math.floor(Math.random()*255);
     z=Math.floor(Math.random()*255);
     a=Math.random().toFixed(2);
     bgcol3 = `rgba(${x},${y},${z},${a})`;
     let deg = Math.floor(Math.random()*360);
     let bgcol = `linear-gradient(${deg}deg, ${bgcol1}, ${bgcol2},${bgcol3})`;
     document.querySelector("body").style.background = bgcol ;
     document.querySelector("p").innerHTML = `background : <br> ${bgcol}`;
 });
 
 // m-1 Simple way => by using hax-code 
 // document.querySelector(".btn").addEventListener("click", () => {
 // var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
 // var hexcode1 = "";
 // var hexcode2 = "";
 // var random_index = 0;

 // for(let i = 0; i < 6;i++){
 //     random_index = Math.floor(Math.random() * hex_numbers.length);
 //     hexcode1 += hex_numbers[random_index];
 //     random_index = Math.floor(Math.random() * hex_numbers.length);
 //     hexcode2 += hex_numbers[random_index];
 // }

 // let bgcol = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;

 // document.body.style.background = bgcol;
 // document.querySelector("p").innerHTML = bgcol;
 // });