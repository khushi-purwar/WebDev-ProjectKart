let mytext=document.getElementById("my-text");
mytext.addEventListener("input",()=>{
    let count=(mytext.value).length;
    document.getElementById("count-result").textContent=`Total charcters : ${count}`;
})