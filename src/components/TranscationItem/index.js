import React from 'react';

import { StyledWrapper } from './styles';

export default ({ data }) => {
  const date = new Date(data.date);
  return (
    <StyledWrapper>
      {`${date.toDateString()} - ${data.type} - $${data.amount}`}
    </StyledWrapper>
  );
};
