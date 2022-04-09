import React, { Component,useState,useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Recipe from './components/Recipe';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';


const Search = () => {
  const APP_ID = "c33623dd";
  const APP_KEY = "f2e6e8d9fffc225326d3185a0d107543";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return <div className="App">
      <br></br>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" onChange={updateSearch} placeholder="Enter item to search recipe" />
        <button className="search-button" type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </button>
      </form>
      <div className="item">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cuisine={recipe.recipe.cuisineType}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}

          />
        ))}
        <br/><br/>
      </div>
  </div>;
};


class App extends Component {
  render() {
    return (
      <>
      <Navigation/>
      <BrowserRouter>
        <div>
          <Route exact path="/search" component={Search}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/profile" component={Profile}/>
        </div>
      </BrowserRouter>
      </>
    );
  }
}


export default App;