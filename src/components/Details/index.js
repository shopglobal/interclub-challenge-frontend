import React, { Component } from 'react';

import { StyledPanel } from './styles';

import Section from '../Section/index';
import UserDetails from '../UserDetails/index';
import Transcations from '../Transcations/index';

const mockMember = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'johdoe@gmail.com',
  number: 156,
};

const summary = {
  _id: '5a1710d301c99584f16a222f',
  amountIncome: 1,
  amountExpense: 3,
  totalIncome: 2.49,
  totalExpense: 130.07999999999998,
};

const transcationsList = [
  {
    _id: '5a1710d301c99584f16a2247',
    amount: 2.49,
    type: 'income',
    member: '5a1710d301c99584f16a222f',
    date: new Date('2017-07-23T18:17:55.871Z'),
    __v: 0,
  },
  {
    _id: '5a1710d301c99584f16a2248',
    amount: 71.66,
    type: 'expense',
    member: '5a1710d301c99584f16a222f',
    date: new Date('2017-09-23T18:17:55.872Z'),
    __v: 0,
  },
  {
    _id: '5a1710d301c99584f16a2249',
    amount: 3.83,
    type: 'expense',
    member: '5a1710d301c99584f16a222f',
    date: new Date('2017-11-23T18:17:55.872Z'),
    __v: 0,
  },
  {
    _id: '5a1710d301c99584f16a2246',
    amount: 54.59,
    type: 'expense',
    member: '5a1710d301c99584f16a222f',
    date: new Date('2017-11-23T18:17:55.871Z'),
    __v: 0,
  },
];

export default class Details extends Component {
  render () {
    return (
      <StyledPanel>
        <Section>
          <UserDetails member={mockMember}/>
        </Section>
        <Section>
          <Transcations list={transcationsList} summary={summary} />
        </Section>
      </StyledPanel>
    );
  }
}
