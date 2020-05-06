import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
// Grab the state from a global variable injected into the server-generated HTML

// Allow the passed state to be garbage-collected



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
