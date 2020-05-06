import React from 'react';
import {Helmet,HelmetProvider} from 'react-helmet-async';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

function App() {
  console.log('logo', logo);
  
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Todos on steroid!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Helmet><title>SSR React App</title></Helmet>
      </HelmetProvider>
        <React.Fragment>
           <Routes/>
        </React.Fragment>
    </div>
  );
}

export default App;
