import {
  FETCH_DETAILS_PENDING,
  FETCH_DETAILS_REJECTED,
  FETCH_DETAILS_FULFILLED,
} from '../../constants/actionTypes';

const initialState = {
  list: [
    {
      _id: '_id',
      amount: 1,
      type: 'income',
      member: 'Loading member',
      date: new Date(),
    },
  ],
  summary: {
    _id: 'id',
    amountIncome: 1,
    amountExpense: 1,
    totalIncome: 1,
    totalExpense: 1,
  },
  member: {
    first_name: 'Loading',
    last_name: 'member',
    number: 'Loading member',
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  if (type === FETCH_DETAILS_PENDING) {
    return state;
  }

  if (type === FETCH_DETAILS_REJECTED) {
    return state;
  }

  if (type === FETCH_DETAILS_FULFILLED) {
    const summary = payload[0].data;
    const list = payload[1].data;
    const member = payload[2].data[0];

    return {
      ...state,
      member: {
        ...member,
      },
      summary: {
        ...summary,
      },
      list: [
        ...list,
      ],
    };
  }

  return state;
}
