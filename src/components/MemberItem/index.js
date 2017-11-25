import React from 'react';

import { StyledWrapper, StyledName } from './styles';

const MemberItem = ({ member, clickHandler }) => (
  <StyledWrapper onClick={() => { clickHandler(member); }} shouldDisplay={member.display}>
    <StyledName>
      {member.first_name}&nbsp;{member.last_name}
    </StyledName>
  </StyledWrapper>
);

export default MemberItem;
