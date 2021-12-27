alert("Start the Game..")

var n=10;
var num = Math.floor(Math.random()*500);
// const num = 100;
var previous = "Your Previous Gauss : ";
document.querySelector(".submit").addEventListener("click",()=>{
    let userNum = document.querySelector("#gauss").value;
    if(n==0){
        previous+=" "+userNum +" .";
        document.querySelector(".previous").innerHTML = previous;
        document.querySelector(".p3").innerHTML = "oops! You Lost!";
        document.querySelector(".p3").style.cssText = `
        background-color : brown;
        width : 100vw;
        height : 200px;
        color : white;
        font-size: 120px;
        `;
        return;
    }
    if(userNum==num){
        document.querySelector(".yourgauss").innerHTML = "Your Ans : Right.";
        previous+=" "+userNum +" .";
        document.querySelector(".previous").innerHTML = previous;
        document.querySelector(".p1").innerHTML = `Try and Gauss a random number beetween 0 and 500. You have <span>&nbsp;&nbsp;  ${n} &nbsp;&nbsp; </span>&nbsp; attenpts to gauss the lucky number.`;
        document.querySelector(".lh").innerHTML = "Users choice is correct! ."
        document.querySelector(".p3").innerHTML = "You Won!";
        document.querySelector(".p3").style.cssText = `
        background-color : green;
        width : 100vw;
        height : 200px;
        color : white;
        font-size: 120px;
        `;
        return;
    }
    else if(userNum>num){
        document.querySelector(".lh").innerHTML = "Users choice is <span>&nbsp;&nbsp;  too high! &nbsp;&nbsp; </span> ."
        document.querySelector("#gauss").innerHTML = "";
    }
    else{
        document.querySelector(".lh").innerHTML = "Users choice is <span>&nbsp;&nbsp;  too low! &nbsp;&nbsp; </span> ."
        document.querySelector("#gauss").innerHTML = "";
    }
    
    previous+=" "+userNum +" ,";
    n-=1;
    document.querySelector(".yourgauss").innerHTML = "Your Ans : Wrong.";
    document.querySelector(".p1").innerHTML = `Try and Gauss a random number beetween 0 and 500. You have <span>&nbsp;&nbsp;  ${n} &nbsp;&nbsp; </span> &nbsp; attenpts to gauss the lucky number.`;
    document.querySelector(".previous").innerHTML = previous;
    // console.log(previous);
    // console.log(n);
})