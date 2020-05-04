import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

function counterApp(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    default:
      return state
  }
}
// Create Redux store with initial state
console.log('preLoadedState', preloadedState);
const store = createStore(counterApp, preloadedState)

ReactDOM.hydrate(
  
  <Root>
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </Root>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
