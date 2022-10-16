import { useRef } from 'react';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

function ParallaxPage(): JSX.Element {
  const parallax = useRef<IParallax>(null);
  return (
    <>
      <GlobalCss />
      <Container>
        <Parallax ref={parallax} pages={1.05}>
          <ParallaxLayer offset={0} speed={0} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax0.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax1.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax2.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.5} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax3.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax4.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax5.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax6.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3.5} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax7.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={4} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/parallax8.png' alt='img' className='img1' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={4} style={{ pointerEvents: 'none' }}>
            <div className='backgroundOverlay' />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0} style={{ pointerEvents: 'none' }}>
            <div className='birdCtr birdCtr1'>
              <div className='bird bird1' />
            </div>
            <div className='birdCtr birdCtr2'>
              <div className='bird bird2' />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0} style={{ pointerEvents: 'none' }}>
            <div className='OtherCtr'>
              <div className='OtherInner'>
                <img src='/images/duminda.jpg' alt='img' className='profile' />
                <div className='profileDetails'>Parallax</div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </Container>
    </>
  );
}

export default ParallaxPage;

const GlobalCss = createGlobalStyle`
  html,body,#root{
    background: #210002;
    height: 100%;
    width: 100%;
  }
`;

const cycle = keyframes`
100% {
    background-position: -900px 0;
}
`;

const move = keyframes`
  0% {
    transform: scale(0.3) translateX(-10vw);
  }

  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0) translateX(110vw) scale(0.6);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .img1 {
    display: block;
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .backgroundOverlay {
    height: 500vh;
    width: 100%;
    background: #210002;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
  .OtherCtr {
    width: 100%;
    height: 105vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .OtherInner {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .profile {
    width: 200px;
    height: auto;
    border-radius: 100%;
    border: 5px solid #feae1a;
  }
  .profileDetails {
    font-size: 45px;
    font-weight: 900;
    color: #feae1a;
    /* font-family: 'Playfair Display', Georgia, serif; */
  }
  .img2 {
    width: 500px;
    height: auto;
  }
  .birdCtr {
    position: absolute;
    top: 0;
    left: -10%;
    transform: scale(0) translateX(-10vw);
    will-change: transform;
    animation-name: ${move};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    overflow: hidden;
  }
  .birdCtr1 {
    animation-duration: 15s;
    animation-delay: 0s;
  }
  .birdCtr2 {
    animation-duration: 16s;
    animation-delay: 5s;
  }
  .bird {
    background-image: url('/images/parallax/birds.svg');
    background-size: auto 100%;
    width: 88px;
    height: 125px;
    will-change: background-position;
    animation-name: ${cycle};
    animation-timing-function: steps(10);
    animation-iteration-count: infinite;
  }
  .bird1 {
    animation-delay: -0.5s;
    animation-duration: 1s;
  }

  .bird2 {
    animation-delay: -0.75s;
    animation-duration: 0.9s;
  }
`;
