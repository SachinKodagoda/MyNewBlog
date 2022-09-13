import React from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = { text?: string };
function EllipsisAnimator({ text = 'Checking' }: TProps): JSX.Element {
  return <Container>{text}</Container>;
}

export default EllipsisAnimator;

const ellipsis = keyframes`
  0% {
    content: '';
  }
  25% {
    content: '.';
  }
  50% {
    content: '..';
  }
  75% {
    content: '...';
  }
  100% {
    content: '';
  }
`;

const Container = styled.div`
  &::after {
    display: inline-block;
    animation: ${ellipsis} steps(1, end) 1s infinite;
    content: '';
  }
`;
