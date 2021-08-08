// dom elements
const result = document.getElementById('result');
const length = document.getElementById('length');
const uppercase  =document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const btn = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
};

//  generate  event listners
btn.addEventListener('click', ()=>{
    const len = Number(length.value);
    const hasLower = lowercase.checked;
    const hasUpper = uppercase.checked;
    const hasNumber = numbers.checked;
    const hasSymbol = symbols.checked;

    result.innerHTML = generatePassword(len, hasLower, hasUpper, hasNumber, hasSymbol);
})

//  copy to clipboard
clipboard.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = result.innerText;

    if(!password)
    return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    
    alert("Password copied to clipboard!")
})

// generate password
function generatePassword(len, lower, upper, number, symbol){
    let generatedPassword = '';
    const checkedCount = lower+upper+number+symbol;
    const checkedArr = [{lower}, {upper}, {number}, {symbol}].filter( 
        item => Object.values(item)[0]
    )    // containing only checked setting

    
    if(checkedCount == 0){
        return '';
    }

    for(let i=0;i<len;i+=checkedCount){
        checkedArr.forEach(type =>{
            const func = Object.keys(type)[0];
            generatedPassword += randomFunc[func]();
           
        })
    }

    const finalPassword = generatedPassword.slice(0,len);
    return finalPassword;
}

//  generator functions

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@>#$]%^&}*({[)=</,'
    return symbols[Math.floor(Math.random() * symbols.length)]

}