import { useEffect, useRef, useState } from 'react';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const TIME = 400;
function ParallaxPage(): JSX.Element {
  const parallax = useRef<IParallax>(null);
  const [text, setText] = useState('Good Morning');
  const [bHue, setBHue] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (bHue === 1) {
        setText('Good Morning!');
      } else if (bHue === 2) {
        setText('Good Day!');
      } else {
        setText('Good Evening!');
      }
      setLoading(false);
    }, TIME);
    return () => {
      clearInterval(timer);
    };
  }, [bHue]);
  const hueVar = () => {
    if (bHue === 1) {
      return '--hue-180';
    }
    if (bHue === 2) {
      return '--hue-90';
    }
    return '--hue-0';
  };
  return (
    <>
      <GlobalCss />
      <Container bHue={hueVar()}>
        <Parallax ref={parallax} pages={1.2}>
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
          <ParallaxLayer offset={0} speed={-1} style={{ pointerEvents: 'none' }}>
            <img src='/images/parallax/ballon3.png' alt='img' className='balloon' />
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

          <ParallaxLayer offset={0} speed={1}>
            <div className='OtherCtr'>
              <div className='OtherInner'>
                <ProfileImg
                  src='/images/duminda.jpg'
                  alt='img'
                  className='profile'
                  onClick={() => {
                    // parallax?.current?.scrollTo(0);
                    setBHue(a => (a + 1) % 3);
                  }}
                />
                <div className='profileDetails'>
                  Parallax with<div className='whiteText'>React-Spring</div>
                </div>
                <ClickHere
                  bHue={hueVar()}
                  onClick={() => {
                    // parallax?.current?.scrollTo(1);
                    setBHue(a => (a + 1) % 3);
                  }}>
                  {loading ? (
                    <img src='/images/parallax/loading.svg' alt='img' className='loader' />
                  ) : (
                    <span>{text}</span>
                  )}
                </ClickHere>
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
  :root {
    --hue-180: hue-rotate(180deg);
    --hue-90: hue-rotate(90deg);
    --hue-0: hue-rotate(0deg);
  }
  html,body,#root{
    background: #000;
    height: 100%;
    width: 100%;
    /* scroll-behavior: smooth; */
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

const Container = styled.div<{ bHue: string }>`
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
    filter: var(${p => p.bHue});
    transition: filter ${TIME}ms;
  }
  .backgroundOverlay {
    height: 500vh;
    width: 100%;
    background: #210002;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    filter: var(${p => p.bHue});
    transition: filter ${TIME}ms;
  }
  .OtherCtr {
    width: 100%;
    height: 110vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .OtherInner {
    width: 100%;
    height: 52vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .profile {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 5px solid #fff;
    flex: none;
  }
  .profileDetails {
    font-size: 45px;
    font-weight: 900;
    color: #feae1a;
    display: flex;
    gap: 10px;
    filter: var(${p => p.bHue});
    transition: filter ${TIME}ms;
  }
  .whiteText {
    color: #fff;
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
  .balloon {
    height: 200px;
    width: auto;
    position: absolute;
    left: 0px;
    top: 0px;
    filter: var(${p => p.bHue});
    transition: filter ${TIME}ms;
  }
  .clickHere {
    filter: var(${p => p.bHue});
    transition: filter ${TIME}ms;
  }
`;

const ClickHere = styled.button<{ bHue: string }>`
  font-size: 45px;
  font-weight: 900;
  color: #de6f1d;
  cursor: pointer;
  filter: var(${p => p.bHue});
  transition: filter ${TIME}ms;
  .loader {
  }
`;

const ProfileImg = styled.img``;
