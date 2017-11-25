import {
  FETCH_DETAILS,
} from '../../constants/actionTypes';

import agent from '../../agent';

export function fetchAllDetails (params, dispatch) {
  const { id } = params;

  const request = Promise.all([
    agent.get(`/transaction-summary/${id}`),
    agent.get('/list-transactions', { id }),
    agent.get('/list-members', { id }),
  ]);

  return dispatch({
    type: FETCH_DETAILS,
    payload: request,
  });
}
