import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '699ae5b0'
  const APP_KEY = '89e8ba8a39644a25a21deb6e2146dc2f'
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('effect')
  })

  return (
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button onClick={() => setCounter(counter + 1)} className="search-button" type="submit">
            {counter}
          </button>
        </form>
    </div>
  );
}

export default App;
