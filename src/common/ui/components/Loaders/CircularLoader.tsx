import { colors } from '@theme/baseTheme';
import React from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = { show: boolean; trackColor?: string; loaderColor?: string; size?: string; border?: string };
function Loader({
  show,
  trackColor = `${colors.transparent_black1}`,
  loaderColor = `${colors.black}`,
  size = '50px',
  border = '10px',
}: TProps): JSX.Element {
  return (
    <Container
      className={`${show ? 'show' : ''}`}
      trackColor={trackColor}
      loaderColor={loaderColor}
      size={size}
      border={border}
    />
  );
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
const Container = styled.div<{ trackColor: string; loaderColor: string; size: string; border: string }>`
  border: ${p => p.border} solid ${p => p.trackColor};
  border-top: ${p => p.border} solid ${p => p.loaderColor};
  border-radius: 50%;
  width: ${p => p.size};
  height: ${p => p.size};
  animation: ${spin} 0.5s linear infinite;
  opacity: 0;

  &.show {
    opacity: 1;
  }
`;
