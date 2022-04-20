const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;







checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);
		console.log(n.codePointAt(0));
		let asc=n.codePointAt(0);
    //console.log(isFibonacci(n));
    infoTxt.style.display = "block";
    // if(isString(n)===true){
    //     return infoTxt.innerHTML = `Enter a valid input`
    // }
    // else{

        return infoTxt.innerHTML = `ASCII Value of <span>'${txtInput.value}'</span> is <span>'${asc}'</span>`;



});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});
