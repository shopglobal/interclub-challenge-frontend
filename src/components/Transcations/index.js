import React from 'react';

import { StyledWrapper } from './styles';

import Summary from '../Summary/index';

export default ({ summary }) => (
  <StyledWrapper>
    <Summary data={summary} />
    <Summary data={summary} />
  </StyledWrapper>
);
