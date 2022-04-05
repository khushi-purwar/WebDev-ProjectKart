const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const money_minus = document.getElementById("money-minus");


const localStorageTransations = JSON.parse(localStorage.getItem("transations"));

let transations =
    localStorage.getItem("transations") !== null ? localStorageTransations : [];

function addTransation(e) {
    e.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") {
        text.placeholder = "please add a text";
        text.style.backgroundColor = "#ccc";
        amount.placeholder = "please add amount";
        amount.style.backgroundColor = "#ccc";
    } else {
        const transation = {
            id: genenrateID(),
            text: text.value,
            amount: +amount.value,
        };
        transations.push(transation);
        addTransationDOM(transation);
        updateValues();
        updateLocalStorage();
        text.value = "";
        amount.value = "";
    }
}
function genenrateID() {
    return Math.floor(Math.random() * 100000000);
}

function addTransationDOM(transation) {
    const sign = transation.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(transation.amount < 0 ? "minus" : "plus");
    item.innerHTML = `${transation.text} <span>${sign}${Math.abs(
        transation.amount
    )}</span> <button class="delete-btn" onclick="removeTransation(${transation.id
        })">x</button>`;
    list.appendChild(item);
    // localStorage.setItem('mostRecentScore', total);

}
function updateValues() {
    const amounts = transations.map((transation) => transation.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    balance.innerText = `₹${total}`;
    money_plus.innerText = `₹${income}`;
    money_minus.innerText = `₹${expense}`;
    localStorage.setItem('mostRecentScore', total);
    // console.log(total);

}

function removeTransation(id) {
    transations = transations.filter((transation) => transation.id !== id);
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem("transations", JSON.stringify(transations));
    // localStorage.setItem("totalSUM",)
    // console.log(total)
    // console.log(JSON.stringify(transations));
    // localStorage.setItem('mostRecentScore', total);

}


function init() {
    list.innerHTML = "";
    transations.forEach(addTransationDOM);
    updateValues();
}
init();

form.addEventListener("submit", addTransation);
// localStorage.setItem('mostRecentScore', total);
