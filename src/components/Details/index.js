import React, { Component } from 'react';

import { StyledPanel, StyledSection } from './styles';


export default class Details extends Component {
  render () {
    return (
      <StyledPanel>
        <StyledSection>
          <UserDetails />
        </StyledSection>
        <StyledSection>
        </StyledSection>
      </StyledPanel>
    );
  }
}
