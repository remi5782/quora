import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import {Helmet} from 'react-helmet';
import App from '../src/App';
// import { fetchCounter } from './api/counter';
// import todosRed from '../src/reducers/todos';
const PORT = process.env.PORT || 3006;
const app = express();
const helmet = Helmet.renderStatic();
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// const router = express.Router();
app.use('*', (req, res)=> {
  const app = ReactDOMServer.renderToString(<App/>);
  
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    const preloadedState = [{name:'check', description: 'checking'}];
    const headerContent = `${helmet.meta.toString()}`;
    console.log('headerContent', headerContent);
    return res.send(
      data
      .replace('<div id="root"></div>', `<div id="root">This is a react app</div>`)
      .replace('</head>', '<title>Server Side Rendered</title>'+'</head>')
      .replace('</body>', `</body><script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // https://redux.js.org/recipes/server-rendering/#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
      )}
    </script>`)
      
      
    );
  });
  //return res.send(formatHTML(app, helmet));
});

// app.use(express.static(path.resolve(__dirname, '..', 'build')));
// function formatHTML(app, helmet){
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
    
//     <title>Not a React App</title>
//     ${helmet.meta.toString()}
//     ${helmet.link.toString()}
//       </head>
//     <body>
//       <div id="root">${app}
        
//       </div>

//       <script src="/static/js/2.cc5ed0c6.chunk.js"></script>
//       <script src="/static/css/main.d1b05096.chunk.css"></script>
//     </body>
//   </html>
// `
// }
// This is fired every time the server side receives a request
// app.use(handleRender)

// function todos(state = [], action) {
//     switch (action.type) {
//       case 'ADD_TODO':
//         return [...state, action.payload]
//       default:
//         return state
//     }
//   }

// function handleRender(req, res) {
//     // Query our mock API asynchronously
//     console.log('in handleRender');
//     fetchCounter(apiResult => {
//       // Read the counter from the request, if provided
//     //   const params = qs.parse(req.query)
//     //   const counter = parseInt(params.counter, 10) || apiResult || 0
//         const todo = {label: 'someTodo', description: 'This is a description'};
//       // Compile an initial state
//       let preloadedState = { todo }
  
//       // Create a new Redux store instance
//       const store = createStore(todosRed, preloadedState)
  
//       // Render the component to a string
//       const html = renderToString(
//         <Provider store={store}>
//           <App />
//         </Provider>
//       )
  
//       // Grab the initial state from our Redux store
//       const finalState = store.getState()
  
//       // Send the rendered page back to the client
//       res.send(renderFullPage(html, finalState))
//     })
//   }

  function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/recipes/server-rendering/#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `
  }





app.listen(PORT, ()=>{
    console.log('Server running on the port ', PORT);
})