import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import membersList from './containers/MembersList/reducer';

export default combineReducers({
  membersList,
  router: routerReducer,
});
