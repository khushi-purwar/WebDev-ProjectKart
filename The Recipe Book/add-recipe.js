let allRecipes = getAllRecipes()
const recipe = {
    id: '',
    name: '',
    description: '',
    ingredients: []
}

//Add ingredients to the recipe's ingredient array
document.querySelector('#ingredient-form').addEventListener('submit', (e) => {
    e.preventDefault()
    addIngredient(e, recipe.ingredients);
    e.target.elements[0].value = ''
    renderIngredients(recipe.ingredients)
})

//Retrieve recipe items, save to local storage, and redirect to home page
document.querySelector('#add-recipe').addEventListener('click', () => {
    const recipeName = document.querySelector('#recipe-name')
    const recipeDescription = document.querySelector('#recipe-description')
    recipe.id = window.location.hash.substr(1)
    if (recipeName.value.length === 0){
        recipe.name = 'Unnamed Recipe'
    } else {
    recipe.name = recipeName.value
    }
    recipe.description = recipeDescription.value
    //push recipe to allRecipes
    allRecipes.push(recipe)
    //store allRecipes into local storage
    saveRecipes(allRecipes)
    //Redirect to home page
    window.location.assign('./index.html')
})
