import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = '699ae5b0'
  const APP_KEY = '89e8ba8a39644a25a21deb6e2146dc2f'

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
  }

  return (
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit"> Search </button>
        </form>
        {recipes.map(recipe => (
          <Recipe />
        ))}
    </div>
  );
}

export default App;
