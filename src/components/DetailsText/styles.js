/* eslint-disable no-undef */

import styled from 'styled-components';

function setFontSize (size) {
  return `font-size: ${size};`;
}

export const StyledTitle = styled.h1`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  ${props => props.fontSize ? setFontSize(props.fontSize) : ''}
`;

export const StyledSubTitle = styled.p`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  ${props => props.fontSize ? setFontSize(props.fontSize) : ''}
`;
