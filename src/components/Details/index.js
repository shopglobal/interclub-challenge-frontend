import React, { Component } from 'react';

import { StyledPanel } from './styles';

import UserDetails from '../UserDetails/index';
import Section from '../Section/index';

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
        <Section>
          <UserDetails member={mockMember}/>
        </Section>
        <Section>
          <UserDetails member={mockMember}/>
        </Section>
      </StyledPanel>
    );
  }
}
