import React, { Component } from 'react';

import { StyledWrapper } from './styles';

export default class Details extends Component {
  render () {
    return (
      <StyledWrapper>
        {this.props.children}
      </StyledWrapper>
    );
  }
}
