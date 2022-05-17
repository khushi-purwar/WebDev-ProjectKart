const probabilities = document.getElementById('probabilities')
const area = document.getElementById('area')

area.focus()

area.addEventListener('keyup',(e)=>{
    takeWords(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        randomPick()
    }
})

let takeWords=(input)=>{
const options = input.split('|').filter(option=>option.trim()!== '').map(option=>option.trim())

probabilities.innerHTML = ''

options.forEach(option => {
    const optionDisplay = document.createElement('span')
    optionDisplay.classList.add('option')
    optionDisplay.innerText=option
    probabilities.appendChild(optionDisplay)
});
}

function randomPick(){
const times = 30

const interval = setInterval(() => {
    const randomOption = pickRandomOption()

    highlightOption(randomOption)

    setTimeout(() => {
        unHighlightOption(randomOption)
    }, 100);
}, 100);

setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
        const randomOption=pickRandomOption()
        highlightOption(randomOption)
    }, 100);
}, times*100);
}

function pickRandomOption(){
    const options = document.querySelectorAll('.option') 
    return options[Math.floor(Math.random()*options.length)]
}

function highlightOption(option){
    option.classList.add('highlight')
}

function unHighlightOption(option){
    option.classList.remove('highlight')
}