import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   // <ShoppingList name="Mark" />
//   <App />, document.getElementById('root')
// );
const name = 'Dongjune'

ReactDOM.render(
  // <ShoppingList name="Mark" />
  <h1 className="hello">My name is {name}!</h1>, document.getElementById('root')
);