document.querySelector(".col1").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = "whitesmoke"
    document.querySelector("body").style.color = "black"
})
document.querySelector(".col2").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = "rgb(180, 170, 170)"
    document.querySelector("body").style.color = "black"
})
document.querySelector(".col3").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = "yellow"
    document.querySelector("body").style.color = "black"
})
document.querySelector(".col4").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = "blue"
    document.querySelector("body").style.color = "white"
})

document.querySelector("#color").addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor = document.querySelector("#color").value;
    document.querySelector("body").style.color = "white"
    
})