let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-btn");
let resetBtn = document.querySelector("#reset-btn");
let headCount = document.querySelector("#head-count");
let tailCount = document.querySelector("#tail-count");

flipBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random()*2);
    // console.log(i);
    coin.style.animation = "none";
    
    if(i){
        setTimeout( function(){
            coin.style.animation = "spin-heads 3s forwards";
            // console.log(coin.style.animation);
        }, 100);
        heads++;
        // console.log(heads);
    }
    else{
        setTimeout( function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
        // console.log(tails);
    }

    setTimeout(updateStats, 3000);
    disableBtn();
})

function updateStats(){
   
    headCount.innerHTML = `Heads : <span>${heads}</span>`;
   
    tailCount.innerHTML = `Tails : <span>${tails}</span>`;
}

resetBtn.addEventListener("click", ()=>{
    heads = 0;
    tails = 0;
    
    headCount.innerHTML = `Heads : <span>${heads}</span>`;
   
    tailCount.innerHTML = `Tails : <span>${tails}</span>`;
})

function disableBtn(){
    flipBtn.disabled  = true;
    setTimeout( function(){
        flipBtn.disabled = false;
    }, 3000)
}