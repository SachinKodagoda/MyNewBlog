import React from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = {
  value?: number;
  path?: string;
  width?: number;
  background?: string;
  track?: string;
  trackRatio?: number;
};
function SmallProgressBar({
  background = '#fff',
  path = '#000',
  track = '#edeff5',
  trackRatio = 0.2,
  value = 0,
  width = 100,
}: TProps): JSX.Element {
  // sanitize 0-100 range
  const secondCondition = value > 0 ? value : 0;
  const tempValue = value > 100 ? 100 : secondCondition;
  const degree = 3.6 * tempValue - 90;
  const firstHalf = tempValue > 50 ? 180 : (tempValue * 180) / 50;
  const secondHalf = tempValue > 50 ? ((tempValue - 50) * 180) / 50 : 0;
  const duration = 1; // seconds
  const firstRate = (firstHalf * duration) / 360;
  const secondRate = (secondHalf * duration) / 360;
  const dotRate = ((firstHalf + secondHalf) * duration) / 360;

  return (
    <Container
      degree={degree}
      firstHalf={firstHalf}
      secondHalf={secondHalf}
      path={path}
      firstRate={firstRate}
      secondRate={secondRate}
      dotRate={dotRate}
      width={width}
      outerWidth={width * trackRatio}
      background={background}
      track={track}
    >
      <div className='inner' />
      <div className='outer' />
      <div className='circle'>
        <div className='bar firstHalfContainer'>
          <div className='progress firstHalfBar' />
        </div>
        <div className='bar secondHalfContainer'>
          <div className='progress secondHalfBar' />
        </div>
      </div>
    </Container>
  );
}

export default SmallProgressBar;

const angleFrame = (angle: number) => keyframes`
  100%{
    transform: rotate(${angle}deg);
  }
`;

type TContainer = {
  degree: number;
  firstHalf: number;
  secondHalf: number;
  path: string;
  firstRate: number;
  secondRate: number;
  dotRate: number;
  width: number;
  outerWidth: number;
  background: string;
  track: string;
};

const Container = styled.div<TContainer>`
  height: ${p => p.width}px;
  width: ${p => p.width}px;
  position: relative;

  .inner,
  .outer,
  .circle {
    position: absolute;
    z-index: 4;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }

  .outer {
  }

  .circle {
    background: ${p => p.track};
  }
  .inner {
    height: calc(100% - ${p => p.outerWidth}px);
    width: calc(100% - ${p => p.outerWidth}px);
    background-color: ${p => p.background};
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .circle {
    z-index: 1;
  }
  .bar {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    clip: rect(0px, ${p => p.width}px, ${p => p.width}px, ${p => p.width * 0.48}px);
    background: ${p => p.track};
  }
  .progress {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    clip: rect(0px, ${p => p.width * 0.52}px, ${p => p.width}px, 0px);
  }

  .firstHalfBar {
    z-index: 1;
    background: ${({ path }) => path};
    transform: rotate(0deg);
    animation: ${p => angleFrame(p.firstHalf)} ${p => p.firstRate}s linear both;
  }

  .secondHalfContainer {
    z-index: 2;
    transform: rotate(180deg);
  }

  .secondHalfBar {
    background: ${({ path, secondHalf, track }) => (secondHalf > 0 ? path : track)};
    transform: rotate(0deg);
    animation: ${p => angleFrame(p.secondHalf)} ${p => p.secondRate}s linear ${p => p.firstRate}s both;
  }
`;
