let screen=document.getElementById('screen');
let btn=document.querySelectorAll('button');
let screenValue='';
for(item of btn){
    item.addEventListener('click',(e)=>{
        let btnTxt=e.target.innerText;
        if(btnTxt=='X'){
            btnTxt='*';
            screenValue=screenValue+btnTxt;
            screen.value=screenValue;
        }
        else if(btnTxt=='C'){
            screenValue='';
            screen.value=screenValue;
        }
        else if(btnTxt=='='){
            screen.value=eval(screenValue);
        }
       else{
            screenValue=screenValue+btnTxt;
            screen.value=screenValue;
        }
    })
}