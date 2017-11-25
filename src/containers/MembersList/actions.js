import {
  FETCH_MEMBERS,
  HIDE_OTHER_MEMBERS,
} from '../../constants/actionTypes';

import agent from '../../agent';

export function fetchMembersList (dispatch) {
  const request = agent.get('/list-members');

  return dispatch({
    type: FETCH_MEMBERS,
    payload: request,
  });
}

export function hideOtherMembers (dispatch, payload) {
  return dispatch({
    type: HIDE_OTHER_MEMBERS,
    payload,
  });
}
