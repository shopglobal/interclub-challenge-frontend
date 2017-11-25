import React from 'react';

import { StyledWrapper, StyledTopic, StyledValue } from './styles';

export default ({ sum = 0, amount = 0 }) => (
  <StyledWrapper>
    <StyledTopic right>
      {'Expenses:'}
    </StyledTopic>
    <StyledValue right>
      {amount}
    </StyledValue>
    <StyledTopic right>
      {'Total value:'}
    </StyledTopic>
    <StyledValue expense right>
      {`$${sum.toFixed(2)}`}
    </StyledValue>
  </StyledWrapper>
);
