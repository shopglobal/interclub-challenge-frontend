import React from 'react';

import { StyledWrapper, StyledName } from './styles';

const MemberItem = ({ member }) => (
  <StyledWrapper>
    <StyledName>
      {member.first_name}&nbsp;{member.last_name}
    </StyledName>
  </StyledWrapper>
);


export default MemberItem;
