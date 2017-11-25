import React from 'react';

import { StyledWrapper } from './styles';

import ExpenseTexts from '../SummaryDetailsText/ExpenseTexts';
import IncomeTexts from '../SummaryDetailsText/IncomeTexts';
import SummaryChart from '../SummaryChart/index';

export default ({ data }) => (
  <StyledWrapper>
    <ExpenseTexts sum={data.totalExpense} amount={data.amountExpense} />
    <SummaryChart data={data} />
    <IncomeTexts sum={data.totalIncome} amount={data.amountIncome} />
  </StyledWrapper>
);
