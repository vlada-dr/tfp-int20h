import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { injectGlobal } from 'styled-components';
import { globalStyles } from 'ui/theme';

import { App } from './app';
import { configureStore } from './configure-store';


const root = document.getElementById('root');
const history = createBrowserHistory();
const store = configureStore({ history });

injectGlobal`${globalStyles}`;

const render = () => {
  ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    root,
  );
};

if (module.hot) {
  module.hot.accept('./app', render);
}

render();
