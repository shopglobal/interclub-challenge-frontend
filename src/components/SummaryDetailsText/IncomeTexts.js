import React from 'react';

import { StyledWrapper, StyledTopic, StyledValue } from './styles';

export default ({ sum, amount }) => (
  <StyledWrapper>
    <StyledTopic left>
      {'Incomes:'}
    </StyledTopic>
    <StyledValue left>
      {amount}
    </StyledValue>
    <StyledTopic left>
      {'Total value:'}
    </StyledTopic>
    <StyledValue income left>
      {`$${sum.toFixed(2)}`}
    </StyledValue>
  </StyledWrapper>
);
