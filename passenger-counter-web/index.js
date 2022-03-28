let count=0
let intial=document.getElementById("p")
let countEl=document.getElementById("count-el")
function increment(){
    count=count+1
    countEl.textContent=count
}
function decrement(){
    count=count-1
    countEl.textContent=count
}
function save(){
    intial.textContent+=+" "+count+" - "
    count=0
    countEl.textContent=0
}