let persons
let tip
let b=0
let answer=0
let total=0
let avtips=[5,10,15,25,50]
let istip
function tip1(){
    tip=avtips[0]
    istip=true
}
function tip2(){
    tip=avtips[1]
    istip=true
}
function tip3(){
    tip=avtips[2]
    istip=true
}
function tip4(){
    tip=avtips[3]
    istip=true
}
function tip5(){
    tip=avtips[4]
    istip=true
}
function calcf(){
   let bill=document.querySelector("#input-el").value
    persons=document.querySelector("#elp").value
    let customL=document.getElementById("custom").value
    if(istip===true){
        answer=((tip/100)*bill)*persons
    }
    else{
        answer=((customL/100)*bill)*persons
    }
    let outputEl=document.querySelector("#output-el")
    let amount=document.querySelector("#amount-el")
    answer=Math.floor(answer)
    outputEl.textContent="$"+answer
    total=parseFloat(bill)+parseFloat(answer)
    amount.innerHTML="$"+total
     istip=false
}
function getclick(){
    var element = document.body
   element.classList.toggle("dark-mode")
   var select=document.querySelector(".main")
   select.classList.toggle("mode")  
}