import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import App from '..src/App';
import { fetchCounter } from './api/counter'
const PORT = process.env.PORT || 3006;
const app = express();
app.use(express.static('./build'));
// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
    // Query our mock API asynchronously
    fetchCounter(apiResult => {
      // Read the counter from the request, if provided
      const params = qs.parse(req.query)
      const counter = parseInt(params.counter, 10) || apiResult || 0
  
      // Compile an initial state
      let preloadedState = { counter }
  
      // Create a new Redux store instance
      const store = createStore(counterApp={}, preloadedState)
  
      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      )
  
      // Grab the initial state from our Redux store
      const finalState = store.getState()
  
      // Send the rendered page back to the client
      res.send(renderFullPage(html, finalState))
    })
  }

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


// app.get('/*', (req, res)=> {
//     const app = ReactDOMServer.renderToString(<App/>);
//     const helmet = Helmet.renderStatic();
//     // const indexFile = path.resolve('./build/index.html');
//     res.send(formatHTML(app, helmet));
// });
// function formatHTML(app, helmet){
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         </head>
//       <body>
//         <div id="root">Hello
//           ${ app }
//         </div>
//         <script src="./bundle.js"></script>
//       </body>
//     </html>
//   `
// }
app.listen(PORT, ()=>{
    console.log('Server running on the port ', PORT);
})