import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import membersList from './reducers/membersList';

export default combineReducers({
  membersList,
  router: routerReducer,
});
