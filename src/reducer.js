import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import membersList from './containers/MembersList/reducer';
import details from './containers/Details/reducer';

export default combineReducers({
  details,
  membersList,
  router: routerReducer,
});
