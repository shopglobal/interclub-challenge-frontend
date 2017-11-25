import {
  FETCH_MEMBERS_REJECTED,
  FETCH_MEMBERS_PENDING,
  FETCH_MEMBERS_FULFILLED,
} from '../constants/actionTypes';

const initialState = {
  list: [],
  pending: false,
  error: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  if (type === FETCH_MEMBERS_PENDING) {
    return {
      list: [...state.list],
      pending: true,
      error: false,
    };
  }

  if (type === FETCH_MEMBERS_FULFILLED) {
    return {
      list: [...payload.data],
      pending: false,
      error: false,
    };
  }

  if (type === FETCH_MEMBERS_REJECTED) {
    return {
      list: [...state.list],
      pending: false,
      error: true,
    };
  }

  return state;
}
