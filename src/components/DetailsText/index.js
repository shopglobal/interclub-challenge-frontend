/* eslint-disable no-unused-vars */

import React from 'react';

import { StyledTitle, StyledSubTitle } from './styles';

export default ({
  text,
  primary = false,
}) => (
  primary ?
    <StyledTitle>
      {text}
    </StyledTitle>
    :
    <StyledSubTitle>
      {text}
    </StyledSubTitle>
);
