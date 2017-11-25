/* eslint-disable no-undef */

import styled from 'styled-components';

function getTextAlign (props) {
  return 'text-align: center;';
}

function getTextColor (props) {
  if (props.expense) return 'color: red;';
  if (props.income) return 'color: chartreuse;';
  return 'color: white;';
}

export const StyledWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.0);
  flex: 1;
  margin: 5px;
  flex-flow: column wrap;
  font-size: 18px;
  line-height: 14px;
`;

export const StyledValue = styled.h2`
  ${props => getTextColor(props)}
  ${props => getTextAlign(props)}
`;

export const StyledTopic = styled.h4`
  ${props => getTextColor(props)}
  ${props => getTextAlign(props)}
`;
