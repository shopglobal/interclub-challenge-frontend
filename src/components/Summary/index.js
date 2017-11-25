import React from 'react';

import { StyledWrapper } from './styles';

import SummaryDetailsText from '../SummaryDetailsText/index';

export default ({ data }) => (
  <StyledWrapper>
    <SummaryDetailsText sum={data.totalExpense} amount={data.amountExpense}/>
  </StyledWrapper>
);
