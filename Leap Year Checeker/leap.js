const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;



function isLeap( n)
{

	if(n%400 == 0 && n%100 == 0)
    {
        return true;
    }

    else if ((n % 4 ==0) &&  (n % 100 != 0) ){return true;}

    return false;
}

// A utility function to test above functions
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}



checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);

    infoTxt.style.display = "block";
    if(isLeap(n)===true) {
        return infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a leap Year`;
    }
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> is not a Leap Year`;

});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});
