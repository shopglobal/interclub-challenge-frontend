import React from 'react';

import { StyledTitle, StyledSubTitle } from './styles';

export default ({ text, primary }) => (
  primary ?
    <StyledTitle>
      {text}
    </StyledTitle> :
    <StyledSubTitle>
      {text}
    </StyledSubTitle>
);
