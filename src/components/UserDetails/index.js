import React from 'react';

import { StyledWrapper, StyledTitle, StyledText } from './styles';

export const MemberItem = ({ member }) => (
  <StyledWrapper>
    <StyledTitle />
    <StyledText text={`${member.first_name} ${member.last_name}`}/>
    <StyledText text={member.email}/>
  </StyledWrapper>
);
