import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducer';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  return applyMiddleware(
    myRouterMiddleware,
    logger,
    promise(),
    thunk
  );
};

export const store = createStore(reducer, getMiddleware());
