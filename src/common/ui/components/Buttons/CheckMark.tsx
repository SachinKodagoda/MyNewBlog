import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function CheckMark(): JSX.Element {
  return <Container />;
}

export default CheckMark;

const Container = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 24px;
  width: 12px;
  border-bottom: 7px solid ${colors.green2};
  border-right: 7px solid ${colors.green2};
`;
