import { useRef } from 'react';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled, { createGlobalStyle } from 'styled-components';

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Scroll(): JSX.Element {
  const parallax = useRef<IParallax>(null);
  return (
    <>
      <GlobalCss />
      <Container>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ marginLeft: '70%', width: '15%' }} alt='satellite' />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '55%', width: '20%' }} alt='cloud' />
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '15%', width: '10%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '70%', width: '20%' }} alt='cloud' />
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '40%', width: '20%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '10%', width: '10%' }} alt='cloud' />
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '75%', width: '20%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '60%', width: '20%' }} alt='cloud' />
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '30%', width: '25%' }} alt='cloud' />
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '80%', width: '10%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '5%', width: '20%' }} alt='cloud' />
            <img src={url('cloud')} style={{ display: 'block', marginLeft: '75%', width: '15%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
            <img src={url('earth')} style={{ width: '60%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundImage: url('clients', true),
              backgroundPosition: 'center',
              backgroundSize: '80%',
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax?.current?.scrollTo(1)}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <img src={url('server')} style={{ width: '20%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax?.current?.scrollTo(2)}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <img src={url('bash')} style={{ width: '40%' }} alt='cloud' />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={() => parallax?.current?.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} alt='cloud' />
          </ParallaxLayer>
        </Parallax>
      </Container>
    </>
  );
}

export default Scroll;

const GlobalCss = createGlobalStyle`
  html,body,#root{
    background: #253237;
    height: 100%;
    width: 100%;
  }
`;
const Container = styled.div`
  width: '100%';
  height: '100%';
`;
