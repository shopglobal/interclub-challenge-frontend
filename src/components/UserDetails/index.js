import React from 'react';

import { StyledWrapper } from './styles';

import DetailsText from '../DetailsText/index';

const getFullName = ({ member }) => {
  return `${member.first_name} ${member.last_name}`;
};

const getSubTitle = ({ member }) => {
  const { email, number } = member;

  if (email) return `${email} | Member number ${number}`;

  return `Member number ${number}`;
};

export default ({ member }) => (
  <StyledWrapper>
    <DetailsText primary text={`${getFullName({ member })}`} />
    <DetailsText text={`${getSubTitle({ member })}`} />
  </StyledWrapper>
);
