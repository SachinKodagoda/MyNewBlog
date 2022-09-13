import { colors } from '@theme/baseTheme';
import React from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = { show: boolean };
function Loader({ show }: TProps): JSX.Element {
  return <Container className={`${show || ''}`} />;
}

export default Loader;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  border: 10px solid rgba(0, 0, 0, 0.1);
  border-top: 10px solid ${colors.black};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.5s linear infinite;
  opacity: 0;

  &.show {
    opacity: 1;
  }
`;
