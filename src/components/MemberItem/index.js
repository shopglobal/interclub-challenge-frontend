import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper, StyledName } from './styles';

const MemberItem = ({ member }) => (
  <Link to={`/details/${member.id}`}>
    <StyledWrapper>
      <StyledName>
        {member.first_name}&nbsp;{member.last_name}
      </StyledName>
    </StyledWrapper>
  </Link>
);

export default MemberItem;
