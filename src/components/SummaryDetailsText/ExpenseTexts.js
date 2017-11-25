import React from 'react';

import { StyledWrapper, StyledTopic, StyledValue } from './styles';

export default ({ sum, amount }) => (
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
      {`$${sum}`}
    </StyledValue>
  </StyledWrapper>
);
