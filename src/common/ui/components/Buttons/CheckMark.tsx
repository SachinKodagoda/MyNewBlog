import React from 'react';

import styled from 'styled-components';

import { colors } from '@theme/baseTheme';

function CheckMark(): JSX.Element {
  return <Container />;
}

export default CheckMark;

const Container = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 24px;
  width: 12px;
  border-bottom: 7px solid ${colors.light_green};
  border-right: 7px solid ${colors.light_green};
`;
