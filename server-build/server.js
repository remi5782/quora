import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import App from '../src/App';
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router';
import configureStore from '../src/store/configureStore';
const PORT = process.env.PORT || 3006;
const app = express();
const helmet = Helmet.renderStatic();
const router = express.Router();
router.use(express.static(path.resolve(__dirname, '..', 'build')));

router.use('*', (req, res) => {
  const {store}= configureStore();
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
              <StaticRouter location={req.baseUrl} context={{}}>
                <App />
              </StaticRouter>
            </Provider>
  );

  const indexFile = path.resolve(__dirname, '..','./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    const preloadedState = {
      storyCollectionData: {},
      storyItemData: {}
    };
    const headerContent = `${helmet.meta.toString()}`;
    console.log('headerContent', app);
    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace('</head>', '<title>Server Side Rendered</title>' + '</head>')
    //     .replace('</body>', `</body><script>
    //   // WARNING: See the following for security issues around embedding JSON in HTML:
    //   // https://redux.js.org/recipes/server-rendering/#security-considerations
    //   window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    //       /</g,
    //       '\\u003c'
    //     )}
    // </script>`)


    );
  });
});



app.use(router);

app.listen(PORT, () => {
  console.log('Server running on the port ', PORT);
})