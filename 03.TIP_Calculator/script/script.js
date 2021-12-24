const btn = document.querySelector("#btn");
btn.addEventListener('click', calculateTip);

function calculateTip(){
    const amount = parseInt(document.querySelector("#amount").value);
    const person = document.querySelector("#person").value;
    const service = document.querySelector("#services").value;

    if(amount === ''  || service === 'Select Option' || person === ''){
        alert("Please enter valid values!!!")
        return;
    }

    if(person === '1'){
    document.querySelector("#each").style.display = "none" ;
    }
    else{
        document.querySelector("#each").style.display = "block" ;
    }

    let total = (amount * service)/person;
    total = Math.round(total)/100;
    total = total.toFixed(2);

    document.querySelector(".tip").style.display = " block";
    document.querySelector("#total").innerHTML = total;

}
