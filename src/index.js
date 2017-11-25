/* eslint-disable no-unused-expressions */

import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import { Provider } from 'react-redux';

import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App/index';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: auto;
    min-width: 320px;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 14px;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
);
