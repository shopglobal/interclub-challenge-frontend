import React, { Component } from 'react';

import { StyledPanel } from './styles';

import UserDetails from '../UserDetails/index';

const mockMember = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'johdoe@gmail.com',
  number: 156,
};

export default class Details extends Component {
  render () {
    return (
      <StyledPanel>
        <UserDetails member={mockMember}/>
      </StyledPanel>
    );
  }
}
