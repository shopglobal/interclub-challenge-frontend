import React from 'react';

import { StyledWrapper } from './styles';

import DetailsText from '../DetailsText/index';

export default ({ sum, amount }) => (
  <StyledWrapper>
    <DetailsText smallMarginBtm text={'Amount:'} />
    <DetailsText primary smallMarginBtm text={amount} />
    <DetailsText smallMarginBtm text={'Total Sum:'} />
    <DetailsText smallMarginBtm primary text={sum} />
  </StyledWrapper>
);
