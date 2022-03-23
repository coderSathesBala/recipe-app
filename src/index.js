import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import DisplayCategories from './DisplayCategories';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/recipe-app" element={<App/>}/>
      <Route path="/display-categories" element={<DisplayCategories />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
