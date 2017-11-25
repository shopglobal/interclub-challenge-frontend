import {
  FETCH_MEMBERS_REJECTED,
  FETCH_MEMBERS_PENDING,
  FETCH_MEMBERS_FULFILLED,
  HIDE_OTHER_MEMBERS,
} from '../../constants/actionTypes';

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
    const list = payload.data.map(member => ({ ...member, display: true }));
    return {
      list,
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

  if (type === HIDE_OTHER_MEMBERS) {
    const memberId = payload;

    const mappedMembers = state.list.map(oldMember => {
      const member = { ...oldMember };
      if (member.id !== memberId) return { ...member, display: false };
      return member;
    });

    return {
      list: mappedMembers,
      pending: false,
      error: false,
    };
  }

  return state;
}
