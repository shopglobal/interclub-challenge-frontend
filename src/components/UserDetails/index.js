import React from 'react';

import { StyledWrapper } from './styles';

import SectionTitle from '../SectionTitle/index';

const getFullName = ({ member }) => {
  return `${member.first_name} ${member.last_name}`;
};

const getSubTitle = ({ member }) => {
  const { email, number } = member;

  if (email) return `${email} | Member number ${number}`;

  return `Member Number ${number}`;
};

export default ({ member }) => (
  <StyledWrapper>
    <SectionTitle primary text={`${getFullName({ member })}`} />
    <SectionTitle text={`${getSubTitle({ member })}`} />
  </StyledWrapper>
);
