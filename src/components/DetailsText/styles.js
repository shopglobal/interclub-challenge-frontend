/* eslint-disable no-undef */

import styled from 'styled-components';

function setFontSize (size) {
  return `font-size: ${size};`;
}

function setTextAlign (props) {
  if (props.right) return 'text-align: right;';
  if (props.left) return 'text-align: left;';
  return 'text-align: center;';
}

function getColor (props) {
  if (props.income) return 'color: lawngreen ;';
  if (props.expense) return 'color: tomato ;';
  return 'color: white ;';
}
export const StyledTitle = styled.h1`
  ${props => getColor(props)}
  ${props => setTextAlign(props)}
  ${props => props.fontSize ? setFontSize(props.fontSize) : ''}
`;

export const StyledSubTitle = styled.p`
  ${props => getColor(props)}
  ${props => setTextAlign(props)}
  ${props => props.fontSize ? setFontSize(props.fontSize) : ''}
`;
