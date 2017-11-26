import React from 'react';

import { StyledWrapper } from './styles';
import TranscationItem from '../TranscationItem/index';

export default ({ data }) => (
  <StyledWrapper>
    {data.map((transaction, key) =>
      <TranscationItem key={key} data={transaction} />)}
  </StyledWrapper>
);
