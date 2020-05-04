import React from 'react';
import {Helmet,HelmetProvider} from 'react-helmet-async';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('logo', logo);
  
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Todos on steroid!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        
      </HelmetProvider>
      <header className="App-header">
        <img src='/static/media/logo.5d5d9eef.svg' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
