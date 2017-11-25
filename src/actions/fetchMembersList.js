import {
  FETCH_MEMBERS,
} from '../constants/actionTypes';

import agent from '../agent';

export default function fetchMembersList (dispatch) {
  const request = agent.get('/list-members');

  return dispatch({
    type: FETCH_MEMBERS,
    payload: request,
  });
}
