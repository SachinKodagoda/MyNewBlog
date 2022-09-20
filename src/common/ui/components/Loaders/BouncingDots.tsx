import { colors } from '@theme/baseTheme';
import React from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = { color?: string; size?: number; gap?: number; heightRate?: number; speed?: number };

function BouncingDots({ color = colors.black, size = 10, gap = 5, heightRate = 1, speed = 0.6 }: TProps): JSX.Element {
  return (
    <Container color={color} size={size} gap={gap} heightRate={heightRate} speed={speed}>
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
    </Container>
  );
}

export default BouncingDots;

const bounce = (height: number) => keyframes`
   0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(${height}px);
    }
    60% {
      transform: translateY(-${height}px);
    }
    80% {
      transform: translateY(0);
    }
`;

const Container = styled.div<{ color: string; size: number; gap: number; heightRate: number; speed: number }>`
  width: ${p => p.size * 3 + p.gap * 2}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .circle {
    flex: none;
    display: inline-block;
    background-color: ${p => p.color};
    height: ${p => p.size}px;
    width: ${p => p.size}px;
    border-radius: 100%;
    &:nth-of-type(1) {
      animation: ${p => bounce(p.size * p.heightRate)} ${p => p.speed}s linear ${2 * 0.1}s infinite;
    }
    &:nth-of-type(2) {
      animation: ${p => bounce(p.size * p.heightRate)} ${p => p.speed}s linear ${3 * 0.1}s infinite;
    }
    &:nth-of-type(3) {
      animation: ${p => bounce(p.size * p.heightRate)} ${p => p.speed}s linear ${4 * 0.1}s infinite;
    }
  }
`;
