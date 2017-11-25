import React from 'react';

import { StyledTitle, StyledSubTitle } from './styles';

export default ({ text, primary, fontSize = false }) => (
  primary ?
    <StyledTitle fontSize={fontSize}>
      {text}
    </StyledTitle> :
    <StyledSubTitle fontSize={fontSize}>
      {text}
    </StyledSubTitle>
);
