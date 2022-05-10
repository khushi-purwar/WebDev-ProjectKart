const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const smallCups = document.querySelectorAll('.cup-small');
const cups = document.getElementById("cups");
//converting NodeList from querySelectorAll() to an array
let smallCupsArr = Array.from(smallCups);
let goal = 2;

minus.addEventListener("click", () => updateGoal("-"));
plus.addEventListener("click", () => updateGoal("+"));

function updateGoal(sign) {
    //take plus or minus string sign
    if (sign == "+" && goal < 3.75) {
        goal += 0.25;
        addCup();
    }
    else if (sign == "-" && goal > 2){ 
        goal -= 0.25;
        deleteCup();
    }
    document.getElementById("goal").innerText = goal;
    listers.innerText = `${goal}L`;
    updateBigCup();
    console.log(smallCupsArr);

}

const addCup = () => {
    const newCup = document.createElement('div');
    newCup.classList.add("cup", "cup-small");
    const newContent = document.createTextNode("250 ml");
    newCup.appendChild(newContent);
    const INDEX = smallCupsArr.length;
    newCup.addEventListener('click', () => highlightCups(INDEX))
    cups.appendChild(newCup);
    smallCupsArr.push(newCup);
}

const deleteCup = () => {
    cups.removeChild(cups.lastChild);
    smallCupsArr.pop();
}


smallCupsArr.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx === smallCupsArr.length - 1 && smallCupsArr[idx].classList.contains("full")) idx--;
    else if(smallCupsArr[idx].classList.contains('full') && !smallCupsArr[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCupsArr.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCupsArr.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${goal - (250 * fullCups / 1000)}L`
    }
}