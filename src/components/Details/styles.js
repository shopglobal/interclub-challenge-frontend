/* eslint-disable no-undef */

import styled from 'styled-components';

export const StyledPanel = styled.div`
  background-color: rgba(255, 255, 255, 0.50);
  width: 1;
  height: 1;
  margin: 25px;
  border-radius: 2px;
  box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.1);
  transition: 200ms all ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSection = styled.div`
  background-color: red;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: horizontal;
  width: 1;
  height: 1;
  padding: 50px calc((100vw - 860px) / 2);
  justify-content: space-between;
`;
