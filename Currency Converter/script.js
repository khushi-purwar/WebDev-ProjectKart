const fromCurrency = document.querySelector('.from-section select');
const toCurrency = document.querySelector('.to-section select');
const fromAmount = document.querySelector('.from-amount input');
const fromResult = document.getElementById('from-rate');
const toResult = document.getElementById('to-rate');
const convertBtn = document.getElementById('convert-btn');
const exchangeBtn = document.getElementById('exchange-btn');

function showData(symbols){
    let symbolsOnly = Object.keys(symbols);
    let html = "";
    symbolsOnly.forEach(symbol => {
        html += `<option data-id = "${symbol}"> ${symbol} </option>`;
    });

    fromCurrency.innerHTML = html;
    fromCurrency.querySelectorAll('option').forEach(option => {
        if(option.dataset.id == "USD") option.selected = 'selected';
    });

    toCurrency.innerHTML = html;
    toCurrency.querySelectorAll('option').forEach(option => {
        if(option.dataset.id == "IND") option.selected = 'selected';
    });
}

// validate the amoutn to be converted
fromAmount.addEventListener('keyup', function(){
    let amount = Number(this.value);
    if(!amount) fromAmount.style.borderColor = "#de3f44";
    else fromAmount.style.borderColor = "#c6c7c9";
});

// convert 'from country currency' to 'to country currency'
convertBtn.addEventListener('click', () => {
    let fromCurrencyVal = fromCurrency.value;
    let toCurrencyVal = toCurrency.value;
    let fromAmt = Number(fromAmount.value);
    if(fromAmt) getConvertedData(fromCurrencyVal, toCurrencyVal, fromAmt);
});

// get the converted data from the API
async function getConvertedData(from, to, amount){
    const API_URL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
    const result = await fetch(API_URL);
    const data = await result.json();
    console.log(data.result);
    showConvertedData(from, to, amount, data.result);
}

//display the converted result
function showConvertedData(fromCurrencyVal, toCurrencyVal, fromAmt, toAmt){
    fromResult.innerHTML = `${fromAmt.toFixed(2)} ${fromCurrencyVal}`;
    toResult.innerHTML = `${toAmt.toFixed(2)} ${toCurrencyVal}`;
}

// swap or reverse the currency
exchangeBtn.addEventListener('click', () => {
    let fromIndex = fromCurrency.selectedIndex;
    let toIndex = toCurrency.selectedIndex;
    fromCurrency.querySelectorAll('option')[toIndex].selected = 'selected';
    toCurrency.querySelectorAll('option')[fromIndex].selected = 'selected';
});