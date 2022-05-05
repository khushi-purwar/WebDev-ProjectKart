let allRecipes = getAllRecipes()
let filter = ''
let filteredRecipes = filterRecipes(allRecipes, filter)
const searchBar = document.querySelector('#search-bar')

loadMainPage()

searchBar.addEventListener('input', function() {
    filter = searchBar.value.toLowerCase()
    filteredRecipes = filterRecipes(allRecipes, filter)
    renderFilteredRecipes(filteredRecipes)
})

//Click to add a new recipe on its own page
document.querySelector('#add-recipe-button').addEventListener('click', () => {  
    const id = uuidv4()
    window.location.assign(`./add-recipe.html#${id}`)
})


