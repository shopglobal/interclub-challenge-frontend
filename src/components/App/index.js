import React, { Component } from 'react';

import MemberList from '../../containers/MembersList';

import { StyledWrapper, StyledLogoLink } from './styles';

export default class App extends Component {
  render () {
    return (
      <StyledWrapper>
        <StyledLogoLink href='https://interclub.io' target='_blank'>
          <img src='/assets/inv_logo_48x48.png' />
        </StyledLogoLink>
        <MemberList />
      </StyledWrapper>
    );
  }
}
