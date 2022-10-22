import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import styled, { createGlobalStyle } from 'styled-components';

// {
//   expanded: false,
//   image: 'images/parallax/bg-1.jpeg',
//   shouldAlwaysCompleteAnimation: true,
//   translateY: [0, 50],
// }
function PlayNew(): JSX.Element {
  return (
    <>
      <GlobalCss />
      <Main>
        <ParallaxProvider>
          <Header>
            <ParallaxBanner
              layers={[
                { image: 'images/parallax/background.jpeg', shouldAlwaysCompleteAnimation: true, speed: -20 },
                {
                  children: <div className='txtCtr'>Hello World!</div>,
                  shouldAlwaysCompleteAnimation: true,
                  speed: -15,
                },
                { image: 'images/parallax/banner.png', shouldAlwaysCompleteAnimation: true, speed: -10 },
              ]}
              className='banner'
            />
          </Header>
        </ParallaxProvider>
      </Main>
    </>
  );
}

export default PlayNew;

const GlobalCss = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background: #000;
  }
`;

const Main = styled.main`
  height: 200vh;
  .banner {
    height: 100vh;
    background: #bbe8f6;
    position: relative;
    aspect-ratio: 2/1;
  }
  .star {
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 999;
  }
  .txtCtr {
    position: absolute;
    text-align: center;
    font-weight: 100;
    font-size: 120px;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.header``;
