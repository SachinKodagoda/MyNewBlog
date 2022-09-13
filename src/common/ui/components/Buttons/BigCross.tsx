import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function BigCross(): JSX.Element {
  return <Container>&times;</Container>;
}

export default BigCross;

const Container = styled.div`
  font-size: 36px;
  color: ${colors.red3};
  font-weight: bold;
  font-family: helvetica, arial;
  line-height: 1;
`;
