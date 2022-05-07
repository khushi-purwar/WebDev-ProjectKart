let buttons=document.querySelectorAll("button");
let screenValue=document.getElementById("res");

for(let item of buttons){
    item.addEventListener("click",function(e){
        let value=e.target.innerText;
        // console.log(value);

        if(value==='C'){
            screenValue.innerHTML="";
            value="";
        }
        else if(value==="="){
            value=eval(screenValue.innerHTML.replace(/([01]+)/g,'0b$1')).toString();
            screenValue.innerHTML=Number(value).toString(2);
        }
        else{
           screenValue.innerHTML+=value; 
        }
    })
}