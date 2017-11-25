/* eslint-disable no-unused-expressions */

import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import { Provider } from 'react-redux';
import { store } from './store';

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
      font-family: 'Roboto', sans-serif;
      overflow-x: hidden;
      font-size: 14px;
    }
`;

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
