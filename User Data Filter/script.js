const answers = document.getElementById('answers')
const filteredData = document.getElementById('filteredData')
const listItems = []

getData()

filteredData.addEventListener('input', (e) => filterData(e.target.value))

  async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()
    results.innerHTML = ''

    results.forEach(user => {
        const listItem = document.createElement('li')

        listItems.push(listItem)

        listItem.innerHTML = `
            <img src="${user.picture.large}" >
            <div class="info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p> ${user.location.country}</p>
            </div>
        `

        answers.appendChild(listItem)
    })
}

function filterData(wordData) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(wordData.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}